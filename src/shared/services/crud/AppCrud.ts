import { Environment } from "../../environment";
import { Api } from "../api";

interface ApiResponse<T> {
  data: T;
  headers: Record<string, string>;
}

interface ErrorResponse {
  message: string;
}

export const getAll = async (
  path: string,
  field: string,
  filter: string = ""
): Promise<{ data: unknown; totalCount: number } | Error> => {
  try {
    let urlRelative = path;
    if (field && filter !== "") {
      urlRelative += `?${field}_like=${filter}`;
    }
    const { data, headers }: ApiResponse<unknown> = await Api.get(urlRelative);

    if (data)
      return {
        data,
        totalCount: Number(headers["x-total-count"] || Environment.LIMIT_ROWS),
      };

    return new Error("Error ao listar registros");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as ErrorResponse).message || "Error ao listar registros"
    );
  }
};

export const getById = async (
  path: string,
  id: string
): Promise<unknown | Error> => {
  try {
    const urlRelative = `${path}/${id}`;
    const { data }: ApiResponse<unknown> = await Api.get(urlRelative);

    if (data) return data;

    return new Error("Error ao registrar os dados");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as ErrorResponse).message || "Error ao consultar registro"
    );
  }
};

export const create = async (
  path: string,
  data: Omit<Record<string, unknown>, "id">
): Promise<unknown | Error> => {
  try {
    const urlRelative = path;
    const response: ApiResponse<unknown> = await Api.post(urlRelative, data);

    if (response.data) return response.data;

    return new Error("Error ao atualizar registrar");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as ErrorResponse).message || "Error ao atualizar registrar"
    );
  }
};

export const updateById = async (
  path: string,
  id: string,
  data: Omit<Record<string, unknown>, "id">
): Promise<unknown | Error> => {
  try {
    const urlRelative = `${path}/${id}/`;
    const response: ApiResponse<unknown> = await Api.put(urlRelative, data);

    if (response.data) return response.data;

    return new Error("Error ao apagar registrar");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as ErrorResponse).message || "Error ao apagar registrar"
    );
  }
};

export const deleteById = async (
  path: string,
  id: string
): Promise<number | Error> => {
  try {
    const urlRelative = `${path}/${id}/`;
    let status = 200;
    if (confirm("Deseja realmente deletar?")) {
      setTimeout(async () => {
        const response = await Api.delete(urlRelative);
        status = response.status;
      }, 5000);
    }
    return status;
  } catch (error) {
    console.error(error);
    return new Error(
      (error as ErrorResponse).message || "Error ao registrar os dados"
    );
  }
};

export const AppCRUD = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
