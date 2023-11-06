import { Environment } from "../../../environment";
import { Api } from "../../api";

const urlPath = "/expenditure/";

interface IExpenditureList {
  id: string;
  uuid: string;
  description: string;
  value: number;
  date: string;
  created_by: string;
  categories: string[];
  categories_display: string[];
}
interface IExpenseDetail {
  uuid: string;
  description: string;
  value: number;
  date: string;
  created_by?: string;
  categories: string[];
  categories_display?: string[];
}

interface IExpenseCreate {
  description: string;
  value: number;
  date: string;
  categories: string[];
}

type TExpenditureCount = {
  data: IExpenditureList[];
  count: number;
};

const getAll = async (
  page = 1,
  filter: string = "",
  rows = Environment.LIMIT_ROWS
): Promise<TExpenditureCount | Error> => {
  try {
    let urlRelative = urlPath + `?{page=${page}}&limit=${rows}`;
    if (filter) {
      urlRelative += `&description_like=${filter}`;
    }
    const { data, headers } = await Api.get(urlRelative);
    if (data)
      return {
        data,
        count: data.length,
      };
    return new Error("Error ao lista registros");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Error ao lista registros"
    );
  }
};
const getById = async (id: string): Promise<IExpenseDetail | Error> => {
  try {
    const urlRelative = urlPath + id;
    const { data } = await Api.get(urlRelative);
    if (data) return data;
    return new Error("Error ao registar os dados");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Error ao consultar registro"
    );
  }
};
const create = async (data: IExpenseCreate): Promise<string | Error> => {
  try {
    const urlRelative = urlPath;
    const response = await Api.post<IExpenseDetail>(urlRelative, data);
    if (response.data) return response.data.uuid;
    return new Error("Error ao atualizar registar");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Error ao atualizar registar"
    );
  }
};
const updateById = async (
  id: string,
  data: Omit<IExpenseDetail, "id">
): Promise<IExpenseDetail | Error> => {
  try {
    const urlRelative = urlPath + `${id}/`;
    const response = await Api.put<IExpenseDetail>(urlRelative, data);
    if (response.data) return response.data;
    return new Error("Error ao apagar registar");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Error ao apagar registar"
    );
  }
};
const deleteById = async (id: string): Promise<number | Error> => {
  try {
    const urlRelative = urlPath + `${id}/`;
    const response = await Api.delete(urlRelative);
    return response.status;
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Error ao registar os dados"
    );
  }
};

export const ExpenditureService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
