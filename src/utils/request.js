import axios from 'axios'
const baseUrl = ''
const instance = axios.create({
  baseURL: baseUrl, // api的base_url
  timeout: 50000 // 请求超时时间
})

//全局请求拦截
instance.interceptors.request.use(function (config) {
  config.headers = {
    // 'Content-Type':'multipart/form-data',
    // 'token':getToken()
    'token':'TAI5oQsMgd20de1KocW5TOs7X0s'
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

//全局相应拦截
instance.interceptors.response.use(function (response) {

  return response.data
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default instance;
// export function get(url,params) {
//   return instance.get(url,{
//     params
//   })
// }

// export function post(url,data) {
//   return instance.post(url,data)
// }

// export function put(url,data) {
//   return instance.put(url,data)
// }

// export function del(url) {
//   return instance.delete(url)
// }