import './App.scss';
// import {Component} from 'react'
import {useState,useEffect,useRef} from 'react'

//引入子组件
import DoubleKill from "./DoubleKill";
import TripleKill from "./TripleKill";



// useEffect()
function App() {
    let [a,setA]=useState(1)
    let [b,setB]=useState(true)
    let [arr,setArr]=useState([1,2,3,4,5])
    const [c,setC]=useState(0)

 // let a=1;//申明了页面要使用的数据
 //    useEffect(()=>{//组件一加载就会执行，看做ComponentDidMount,只要数据发生变化它就会执行一次
 //        console.log("1--useEffect")
 //    },[a])
    // useEffect(()=>{
    //     console.log("b-------useEffect")
    // },[b])

    useEffect(()=>{
        return ()=>{
            console.log("")
        }
    },[])

    let Com;
    if (c===0){
        Com=<DoubleKill/>
    }else{
        Com=<TripleKill/>
    }
  return (
    <div className="App">
        <div>呵呵呵</div>
        <h1>{a}----{b?"真":"假"}</h1>
        <ul>
            {arr.map((v,i)=>{
                return <li key={i}>{v}</li>
            })}
        </ul>


        <button onClick={()=>{
            let _a=a*2
            setA(_a);
            let _arr=[...arr];
            _arr.push("hello");
            setArr(_arr)
            // console.log(a,b)
        }}>修改a</button>

        <button onClick={()=>{
            setB(false)
        }}>修改b</button>
        {/*<h1>{a}</h1>*/}
        {/*<button onClick={()=>{*/}
        {/*    a=2;*/}
        {/*    console.log(a);*/}
        {/*}}>修改</button>*/}


        <hr/>

        <button onClick={()=>{setC(0)}}>双杀</button>
        <button onClick={()=>{setC(1)}}>三杀</button>
        {Com}

    </div>
  );
}

export default App;


// class App extends Component{
//     render(){
//         return <div className="App">
//             <div>呵呵呵</div>
//         </div>
//     }
// }