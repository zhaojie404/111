import {
    Navigate,
    useRoutes
} from 'react-router-dom'
import Power from "./power";

import Home from "../pages/home";
import Login from '../pages/login'
import Admin from "../pages/home/admin";
import Notice from "../pages/home/notice";
import Student from "../pages/home/student";


const Routers=()=>{
    return useRoutes([
        {
            path:"/",
            element:<Navigate to={"/login"}/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/home",
            element:<Power path={"/home"} ele={<Home/>}/>,

            children:[//子路由
                {
                    index:"index",//默认展示当前子组件
                    element:<Power path="/home/notice" ele={<Notice/>}/>
                },
                {
                    path:"notice",
                    element:<Power path="/home/notice" ele={<Notice/>}/>
                },
                {
                    path:"student",
                    element:<Power path="/home/student" ele={<Student/>}/>
                },
                {
                    path:"admin",
                    element:<Power path="/home/admin" ele={<Admin/>}/>
                }
            ]
        },

    ])
}
export default Routers

