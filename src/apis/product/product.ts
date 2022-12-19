
import axiosClient from "../axiosClient";
import { ReturnReponse } from "../response.interface";
import { IResProduct } from "./product.type";

const productApi = {
  getProduct(): Promise<ReturnReponse<IResProduct>> {
    const url = "/product/list"; //params : page, filter
    return axiosClient.get(url);
  },
};

export default productApi;
