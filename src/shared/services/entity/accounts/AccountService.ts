import { Environment } from "../../../environment";
import { Api } from "../../api";

const urlPath = "/accounts/";

interface IAccountList {
  id: string;
  uuid: string;
  name: string;
  email: string;
}
interface IAccountDetail {
  id: string;
  uuid: string;
  name: string;
  email: string;
}

interface IAccountCreate {
  name: string;
  email: string;
  password: string;
}

type TAccountsCount = {
  data: IAccountList[];
  totalCount: number;
};

const getAll = async (
  page = 1,
  filter: string = "",
  rows = Environment.LIMIT_ROWS
): Promise<TAccountsCount | Error> => {
  try {
    let urlRelative = urlPath + `?{_page=${page}}&_limit=${rows}`;
    if (filter) {
      urlRelative += `&name_like=${filter}`;
    }

    const { data, headers } = await Api.get(urlRelative);
    if (data)
      return {
        data,
        totalCount: Number(headers["x-total-count"] || Environment.LIMIT_ROWS),
      };
    return new Error("Error ao lista registros");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Error ao lista registros"
    );
  }
};
const getById = async (id: string): Promise<IAccountDetail | Error> => {
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
const create = async (data: IAccountCreate): Promise<string | Error> => {
  try {
    const urlRelative = urlPath;
    const response = await Api.post<IAccountDetail>(urlRelative, data);
    if (response.data) return response.data.id;
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
  data: Omit<IAccountDetail, "id">
): Promise<IAccountDetail | Error> => {
  try {
    const urlRelative = urlPath + `${id}/`;
    const response = await Api.put<IAccountDetail>(urlRelative, data);
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

export const AccountService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
