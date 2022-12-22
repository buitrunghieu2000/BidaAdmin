import axiosClient from "../axiosClient";
import { ReturnReponse } from "../response.interface";

const discountApi = {
  addDiscount(payload: any): Promise<ReturnReponse<any>> {
    const url = "/discount/create"; //params : page, filter
    return axiosClient.post(url, payload);
  },

  getListDiscount(): Promise<ReturnReponse<any>> {
    const url = "/discount/list"; //params : page, filter
    return axiosClient.get(url);
  },

  eidtDiscount(payload:any): Promise<ReturnReponse<any>> {
    const url = '/discount/edit'; //params : page, filter
    return axiosClient.put(url,payload);
  },
};

export default discountApi;
