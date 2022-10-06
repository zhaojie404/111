import { Button,  Form, Input ,Radio,message} from 'antd';
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './index.scss'
import http from '../../utils/http'
const Login=()=>{
    const navigate=useNavigate();
    const [value,setValue]=useState("学生");
    const onChange=(ev)=>{
        console.log("radio checked",ev.target.value);
        setValue(ev.target.value);
    }
    const onFinish = (values) => {//表单提交触发函数，value-表单输入框的值
        //自己封装的fetch
        http({
            url:"/login/getuser",
            params:values//{id:1,username:admin,type:管理员}
        }).then(res=>{
            console.log(res)
            sessionStorage.setItem("token",res.token)
            sessionStorage.setItem("user",JSON.stringify(res.data[0]))
            sessionStorage.setItem("power",JSON.stringify(res.power))
            if(res.code===200){
                message.success("登录成功")
                navigate("/home");
            }
        })


        //未封装过的fetch发的请求
        // fetch("http://localhost:8888/login/getuser?username=201&password=201&type=管理员")
        //
        //     .then(resp=>{
        //         console.log(resp)
        //       return resp.json()
        //     })
        //     .then(data=>{
        //         console.log(data);
        //     }).catch((ex)=>{
        //     console.log("错误信息："+ex)
        // })
        // console.log('Success:', values);


    };
    return (
        <div className={"loginBox"}>
            <Form
                name="basic"
                labelCol={{
                    span: 5,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{//初始值
                    roleLogin: "学生",
                }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[
                        {
                            required: true,//必填
                            message: '请输入您的用户名',//提示信息
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入您的密码',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="roleLogin"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Radio.Group name="radiogroup" value={value} onChange={onChange}>
                        <Radio value={"学生"}>学生</Radio>
                        <Radio value={"管理员"}>管理员</Radio>

                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>

    );
}
export default Login;