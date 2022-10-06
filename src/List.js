import Form from "./Form";

const List=({list,page,setList,setPage })=>{
    const List=list.slice((page-1)*5,page*5).map((v,i)=>{
        return <li key={i}>{v}----<b onClick={()=>{
            changeList(i)
        }}>删除</b></li>
        // return <li key={i}>{v}----<b >删除</b></li>
    })
    const changeList=(i)=>{
        let myList=[...list];
        myList.splice((page-1)*5+ i,1);
        setList(myList);
        console.log(myList)
        if(myList.length<=(page-1)*5){
            setPage(page-1)
        }
    }
    return (
        <div>
            <ul>
                {List}
            </ul>
        </div>
    )
}
export default List