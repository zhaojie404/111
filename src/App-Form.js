import {useState} from 'react'
import Form from "./Form";
import List from "./List";
import Page from "./Page";
// import './App.less'
import './App.scss'
// import style from './App.module.scss'
import love from './love.png'
import { Button } from 'antd';

function App() {
  const [list,setList]=useState(["aaa","bbbb"]);//初始留言数据
  const [page,setPage]=useState(1);

  return (
    <div className="App">
        <h1 className={style.red}>留言</h1>
        <Form setList={setList} list={list}/>
        <List list={list} page={page} setList={setList} setPage={setPage}/>
        <Page page={page} list={list} setPage={setPage}/>
        <img src={love} alt=""/>

        <img src={require('./love.png')} alt=""/>
        
    </div>
  );
}

export default App;


