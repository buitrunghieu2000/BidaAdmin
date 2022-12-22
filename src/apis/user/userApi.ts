
import axiosClient from "../axiosClient";
import { ReturnReponse } from "../response.interface";

const userApi = {

  getUserList(): Promise<ReturnReponse<any>> {
    const url = "/users/list"; //params : page, filter
    return axiosClient.post(url);
  },

};

export default userApi;
