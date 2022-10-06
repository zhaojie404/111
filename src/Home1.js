/*
 * @Author: '111' '1415586220@qq.com'
 * @Date: 2022-09-28 09:59:40
 * @LastEditors: '111' '1415586220@qq.com'
 * @LastEditTime: 2022-09-28 10:47:05
 * @FilePath: \myapp(1)\src\Home1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {useNavigate} from 'react-router-dom'
const Home1=()=>{
    const navigate = useNavigate();
    const goBack =()=>{
        navigate(-1)
    }
    const goHome2 = ()=>{
        // navigate("/home/home2");
        navigate("/home/home2" , {replace:true}) 
    }
        return (
            <div>
                <div>Home1</div>
                <div>
                    <button onClick={goBack}>-1</button>            
                    <button onClick={goHome2}>Home2</button>
                </div>
            </div>
        )
}
export default Home1
