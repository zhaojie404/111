import {useState} from 'react'
const Form=({setList,list})=>{
// const Form=(props)=>{//{setList}
    const [val,setVal]=useState("");//输入框的数据存在这里
    const inputChange=(ev)=>{//受控表单
        setVal(ev.target.value);
    }

    //向list添加数据
    const addList=()=>{
        let myList=[...list];
        myList.push(val)
        setList(myList);
        setVal("")
    }

    return (
        <>
            Form内容：
            <input type="text" value={val} onChange={inputChange}/>
            <button onClick={addList}>添加</button>
        </>
    )
}
export default Form