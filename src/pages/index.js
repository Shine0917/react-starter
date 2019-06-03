import React from 'react';
import {Card,Form, Input, Button, Icon, Checkbox,message} from 'antd';
import  './index.module.less';

const FormItem = Form.Item;
class LoginPage extends React.Component {

    handleSubmit = () => {
        let userInfo  = this.props.form.getFieldsValue();
        this.props.form.validataFields((err,values) => {
            if(!err) {
                message.success(`${userInfo.username}欢迎您，当前密码为：${userInfo.password}`)
            }
        })
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
            <Card title="登录水平表单" style={{marginTop:20}}>
            <Form onSubmit={this.handleSubmit}  style={{width:300}} >
                <FormItem>
                    {getFieldDecorator('username',{
                        initialValue:'',
                        rules:[{required: true, message:'请输入你的用户名'}],
                    })(
                        <Input 
                        prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25'}}/>}
                        placeholder="username"
                        />
                        )
                    }
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password',{
                        initialValue:'',
                        rules:[{required:true, message:'请输入密码！'}],
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{color:'rgba(0,0,0,.25'}}/>}
                        type="password"
                        placeholder="password"
                        />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember',{
                        valuePropName:'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                    <a className="login-form-forgot" href="#">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
                    Or 
                    <a href="#">register now!</a>
                </FormItem>

            </Form>
            </Card>
            </div>
        )
    }
}

export default  Form.create()(LoginPage);