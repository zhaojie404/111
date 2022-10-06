const Power=(Com,url)=>{
    // console.log("进入Power.js")
    //这里拦截判断是否可以返回当前组件
    //取出sessionStorage中的power比对，如果本地数据中有就返回当前组件，如果本地用户数据中没有就不返回当前组件
    let power=JSON.parse(sessionStorage.getItem("power"));
                                                            //   3
    for(let i=0;i<power.length;i++){//[1,2,3,4,5]
        if(power[i].link.indexOf(url)!==-1){//有权限访问
            return <>
                {Com}
            </>
        }
    }
    return <div><h1>没有访问权限</h1></div>



}
export default Power;