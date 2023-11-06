import { Environment } from "../../../environment";
import { Api } from "../../api";

const urlPath = "/categories/";

interface ICategoriesList {
  id: string;
  uuid: string;
  name: string;
}
interface ICategoryDetail {
  id: string;
  uuid: string;
  name: string;
}

interface ICategoryCreate {
  name: string;
}

type TCategoriesCount = {
  data: ICategoriesList[];
  count: number;
};

const getAll = async (
  page = 1,
  filter: string = "",
  rows = Environment.LIMIT_ROWS
): Promise<TCategoriesCount | Error> => {
  try {
    let urlRelative = urlPath + `?{page=${page}}&limit=${rows}`;
    if (filter) {
      urlRelative += `&name_like=${filter}`;
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
const getById = async (id: string): Promise<ICategoryDetail | Error> => {
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
const create = async (data: ICategoryCreate): Promise<string | Error> => {
  try {
    const urlRelative = urlPath;
    const response = await Api.post<ICategoryDetail>(urlRelative, data);
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
  data: Omit<ICategoryDetail, "id">
): Promise<ICategoryDetail | Error> => {
  try {
    const urlRelative = urlPath + `${id}/`;
    const response = await Api.put<ICategoryDetail>(urlRelative, data);
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

export const CategoriesService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
