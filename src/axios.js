import axios from "axios";
import { getToken, setToken } from "@/composables/auth";
let value = '7cf2b6be-bb51-46fe-9265-d963d4b4c475';
const service = axios.create({
    baseURL:'/api'
})
// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 往header自动增加token
    const token = getToken()
    if (!token) {
      setToken(value)
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});
function getAxios(url, params){
  return new Promise((resolve, reject) => {
    service.post('/cloud' + url, params).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
export default {
  ...service,
  getAxios,
}