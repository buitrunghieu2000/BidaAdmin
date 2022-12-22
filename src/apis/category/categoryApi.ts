
import axiosClient from "../axiosClient";
import { ReturnReponse } from "../response.interface";

const categoryApi = {
  createCategory(data: any): Promise<ReturnReponse<any>> {
    const url = "/category/create"; //params : page, filter
    return axiosClient.post(url, data);
  },
  getCategory(): Promise<ReturnReponse<any>> {
    const url = "/category/list"; //params : page, filter
    return axiosClient.get(url);
  },
  getSelectCategory(name: string): Promise<ReturnReponse<any>> {
    const url = `/category/read?name=${name}`; //params : page, filter
    return axiosClient.get(url);
  },
  editCategory(data: any): Promise<ReturnReponse<any>> {
    const url = "/category/edit"; //params : page, filter
    return axiosClient.put(url, data);
  },
};

export default categoryApi;
