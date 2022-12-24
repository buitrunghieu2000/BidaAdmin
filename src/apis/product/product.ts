import axiosClient from "../axiosClient";
import { ReturnReponse } from "../response.interface";
import { IResProduct } from "./product.type";

const productApi = {
  getProduct(skip: number, limit: number): Promise<ReturnReponse<IResProduct>> {
    const url = `/product/list?skip=${skip}&limit=${limit}`; //params : page, filter
    return axiosClient.get(url);
  },
  getSkipProduct(skip: number, limit: number): Promise<ReturnReponse<IResProduct>> {
    const url = `/product/list?skip=${skip}&limit=${limit}`; //params : page, filter
    return axiosClient.get(url);
  },

  createProduct(payload: any): Promise<ReturnReponse<any>> {
    const url = "/product/create"; //params : page, filter
    return axiosClient.post(url, payload);
  },
  importProduct(payload: any): Promise<ReturnReponse<any>> {
    const url = "/product/import"; //params : page, filter
    return axiosClient.post(url, payload);
  },
  importColors(payload: any): Promise<ReturnReponse<any>> {
    const url = "/product/addColor"; //params : page, filter
    return axiosClient.post(url, payload);
  },
  getDetilaProduct(_id: any): Promise<ReturnReponse<any>> {
    const url = `/product/read?${_id}`; //params : page, filter
    return axiosClient.get(url);
  },

  updateProduct(payload: any): Promise<ReturnReponse<any>> {
    const url = "/product/update"; //params : page, filter
    return axiosClient.post(url, payload);
  },

  editDiscount(payload:any): Promise<ReturnReponse<any>> {
    const url = '/discount/edit'; //params : page, filter
    return axiosClient.put(url,payload);
  },

};

export default productApi;
