import {useEffect} from 'react'

const DoubleKill=()=>{
    useEffect(()=>{

        return ()=>{
            console.log("双杀完毕")
        }

    });

    return <div>
        <h1>DoubleKill</h1>
    </div>
}
export default  DoubleKill
