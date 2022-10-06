const Page=({page,list,setPage})=>{
    //算出总页码
    let pageTotal=Math.ceil(list.length/5)
    let myli=[]
    if(list.length>5){// 如果数据小于5条就不产生页码
        for(let i=1;i<=pageTotal;i++){
            myli.push(<li key={i} style={{"listStyle":"none","float":"left","padding":"3px"}} onClick={()=>{
                changePage(i)
            }}>{i}</li>)
        }
    }

    const changePage=(i)=>{//点击页码改变页码的函数
        setPage(i)
    }
    return (
        <div>
            {/*页码*/}
            <ol>
                {myli}
            </ol>
        </div>
    )
}
export default Page