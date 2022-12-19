import axios from "axios";
const instance = axios.create({
  baseURL: 'https://603e558448171b0017b2f2e0.mockapi.io'
});
interface ICallAPI {
  getAPI:(method:string,url:string,data?:any) => Promise<any>;
}
const callAPI:ICallAPI = {
  getAPI(method:string,url:string,data = {}):Promise<any> {
    return instance({
      method:method,
      url:url,
      data: data
    })
  }
}
export default callAPI;