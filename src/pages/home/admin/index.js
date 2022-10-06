/* 搜索，新增，表格展示 */
import React, { useEffect, useState } from 'react';
import { SearchOutlined} from '@ant-design/icons';
import { Button, Form, Input ,Space, Table,Modal,Select} from 'antd';
import http from "../../../utils/http";
const { Option } = Select;


const Admin=()=>{
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({}); // To disable submit button at the beginning.
    const [isModalOpen, setIsModalOpen] = useState(false);
    const columns = [
        {
            title: '用户ID',//表格列名
            dataIndex: 'id',//对应数据字段
            key: 'id',//该列的唯一值
        },
        {
            title: '管理员名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '管理员账号',
            dataIndex: 'userId',
            key: 'userId',
        },
        {
            title: '管理员权限',
            key: 'type',
            render: (text) =>{
                // console.log(text.type)
                return <span>{text.type===1?"普通管理员":"超级管理员"}</span>
            }
        },
        {
            title: '操作',
            render:(_,record)=>(
                <Space size="middle">
                    <Button type={"default"}>修改</Button>
                    <Button type={"dashed"}>删除</Button>
                 </Space>
            )

        },
    ];
    const [data,setData]=useState([])


    useEffect(() => {
        forceUpdate({});
        http({
            url:"/admin/getadmin"
        }).then(res=>{
            console.log(res);
            setData(res.data);
        })
    }, []);

    //搜索框
    const onFinish = (values) => {
        console.log('Finish:', values);
    };

    //模态框
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        console.log("模态框确认")
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        console.log("取消")
        setIsModalOpen(false);
    };

    return (
        <>
            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}
                  initialValues={{
                      type:"普通管理员"
                  }}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入您要搜索的内容!',
                        },
                    ]}
                >
                    <Input prefix={<SearchOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>

                <Form.Item shouldUpdate>
                    {() => (
                        <Button
                            type="primary"
                            htmlType="submit"
                        >
                            搜索
                        </Button>
                    )}
                </Form.Item>
                <Form.Item>

                    <Button
                        type="primary"
                        style={{backgroundColor:"#08979c",color:"white"}}
                        onClick={showModal}
                    >
                        新增
                    </Button>

                </Form.Item>
            </Form>
            <Table columns={columns} dataSource={data} rowKey={(record) => record.id}  pagination={{pageSize:5}}/>
            {/*新增弹框*/}
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 5,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    autoComplete="off"
                    initialValues={{
                        type:"1"
                    }}
                >
                    <Form.Item
                        label="用户ID"
                        name="id"
                        rules={[
                            {
                                required: true
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="账号"
                        name="userID"
                        rules={[
                            {
                                required: true,
                                message: '请输入您的账号!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="Password"
                        rules={[
                            {
                                required: true,
                                message: '请输入您的密码!',
                            },
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item
                        label="权限"
                        name="type"
                        // initialValue={"普通管理员"}
                        rules={[
                            {
                                required: true
                            },
                        ]}
                    >
                        <Select
                            // defaultValue={"1"}
                        >
                            <Option value="1">普通管理员</Option>
                            <Option value="2">超级管理员</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </>

    );
}
export default Admin;