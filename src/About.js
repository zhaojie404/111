/*
 * @Author: '111' '1415586220@qq.com'
 * @Date: 2022-09-28 09:59:40
 * @LastEditors: '111' '1415586220@qq.com'
 * @LastEditTime: 2022-09-28 10:35:22
 * @FilePath: \myapp(1)\src\About.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { 
  useSearchParams,
  // useParams
 } from "react-router-dom";
const About=()=>{
    const [search,set]=useSearchParams();
    console.log(search.get("b"))
    console.log(search)
    search.forEach((v,i)=>{
      console.log(v,i)
    })
    // const params=useParams();
    // console.log(params)
    return(<div>About</div>)
  }
export default About;