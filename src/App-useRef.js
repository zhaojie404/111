import './App.scss';
import {useEffect,useRef} from 'react'

function App() {
   let p1=useRef(null);//一般初始值给null
   let p2=useRef(null);
   useEffect(()=>{
       console.log(p1.current)
       console.log(p2.current)
   })
  return (
    <div className="App">
        <p ref={p1}>p1</p>
        <p ref={p2}>p2</p>

    </div>
  );
}

export default App;


