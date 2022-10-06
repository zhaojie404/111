const Power=(props)=>{
    // console.log(props)
    let power=JSON.parse(sessionStorage.getItem("power"));
                                                            //   3
    for(let i=0;i<power.length;i++){//[1,2,3,4,5]
        if(power[i].link.indexOf(props.path)!==-1){//有权限访问
            return <>
                    {props.ele}
            </>
        }
    }
    return <div><h1>没有访问权限</h1></div>



}
export default Power;