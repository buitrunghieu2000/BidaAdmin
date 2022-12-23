import axiosClient from "../axiosClient";
import { ReturnReponse } from "../response.interface";

const billApi = {
  addDiscount(payload: any): Promise<ReturnReponse<any>> {
    const url = "/discount/create"; //params : page, filter
    return axiosClient.post(url, payload);
  },

  getListBill(): Promise<ReturnReponse<any>> {
    const url = "/bill/list"; //params : page, filter
    return axiosClient.get(url);
  },

  getDetailBill(payload:any): Promise<ReturnReponse<any>> {
    const url = '/bill/read'; //params : page, filter
    return axiosClient.post(url,payload);
  },
};

export default billApi;
