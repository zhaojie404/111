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
            // element:<Home/>,
            element:Power(<Home/>,"/home"),
            // element:<Power path={"/home"} ele={<Home/>}/>,

            children:[//子路由
                {
                    index:"index",//默认展示当前子组件
                    // path:"notice",//子路由不需要 /notice 这样写， 斜杠不要
                    element:Power(<Notice/>,"/home/notice")
                },
                {
                    path:"notice",
                    element:Power(<Notice/>,"/home/notice")
                },
                {
                    path:"student",
                    element:Power(<Student/>,"/home/student")
                },
                {
                    path:"admin",
                    element:Power(<Admin/>,"/home/admin")
                }
            ]
        },

    ])
}
export default Routers

