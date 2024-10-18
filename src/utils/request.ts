import { createAlova } from 'alova';
import adapterFetch from 'alova/fetch';
const headers = {'Content-Type': 'application/json;charset=UTF-8'};
const alovaInstance = createAlova({
    baseURL: 'http://www.peaceandlove.asia',

    requestAdapter: adapterFetch(),
    // 请求拦截器
    beforeRequest(){

    },
    // 返回拦截器
    responded: {
        onSuccess:async (response, methodInstance)=>{

        },
        onError(error) {
            throw new Error(error)
        }
    }
});

const http = {
     get(url:string,params?:Record<string, any>) {
        return alovaInstance.Get(url,{
            headers,
            params
        })
     },
    post(url:string,params?:Record<object, any>){
        const defaultParams={
            uuid: new Date().getTime(),
            ...params
        }
        return alovaInstance.Post(url,defaultParams)
    }
}
export default http
