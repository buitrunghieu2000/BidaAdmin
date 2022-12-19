
import axiosClient from "../axiosClient";
import { ReturnReponse } from "../response.interface";
import { IResProduct } from "./product.type";

const productApi = {
  getProduct(): Promise<ReturnReponse<IResProduct>> {
    const url = "/product/list"; //params : page, filter
    return axiosClient.get(url);
  },
  createProduct(payload: any): Promise<ReturnReponse<any>> {
    const url = "/product/create"; //params : page, filter
    return axiosClient.post(url, payload);
  },
};

export default productApi;
