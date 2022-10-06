const BASE_URL='/api'  //基础请求路径  http://172.16.235.16:8888

const json2url=(json)=>{
    let arr=[];
    for(let name in json){
        arr.push(name+"="+json[name]) //"id=1&name=admin&pwd=123"
    }
    return arr.join("&")
}

const http=({url,method="get",params={},data={}})=>{
    if(!url)return;//如果没有传递请求路径，就结束

    const token=sessionStorage.getItem("token") || "";//发起请求之前，先获取token


    let options={
        method,
        headers:{
            token
        },
        // body:JSON.stringify(data)
    }

    if(method==="post"){
        options.body=JSON.stringify(data)
    }

    return fetch(BASE_URL+url+"?"+json2url(params),options)
        .then(response=>{
            if(response.status===401){
                window.location.herf="/login"
            }else{
                return   response.json()
            }

        })
}

export default http;
/*
* http({
*   url:"",
*   method:"",
*   params:{}   |   data:{}          -------get请求params      post---data:{}
*
* }).then(res=>{
*   //在这里直接拿到数据结果
* })
* 使用 token 的内容页封装进去
*
* */