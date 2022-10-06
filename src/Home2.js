/*
 * @Author: '111' '1415586220@qq.com'
 * @Date: 2022-09-28 09:59:40
 * @LastEditors: '111' '1415586220@qq.com'
 * @LastEditTime: 2022-09-28 10:41:55
 * @FilePath: \myapp(1)\src\Home2.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {useNavigate} from 'react-router-dom'
const Home2=()=>{
    const navigate = useNavigate();
    const goBack =()=>{
        navigate(-1)
    }
    return(            
    <div>
        <div>Home2</div>
        <div>            
            <button onClick={goBack}>-1</button>
        </div>
    </div>)
}
export default Home2
