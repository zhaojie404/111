import {
    NavLink,
    Outlet
} from 'react-router-dom'


const Home=()=><div>
    <h1>Home</h1>
    <NavLink to={"/home/home1"}>Home1</NavLink>
    <NavLink to={"/home/home2"}>Home2</NavLink>
    <Outlet/>{/*占位符，用来展示home1和home2的内容的*/}
</div>
export default Home;