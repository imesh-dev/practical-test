import React, {Component} from 'react'
import API from '../axios/Api'

export class Login extends Component{

    state = {
        id:'',
        name:'',
        address:'',
        post:'',
        res:''
    }



    handlerChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    handlerSubmit =async (event) =>{
        event.preventDefault()
        await API.put('login.php',this.state).then(response => this.setState({
            res:response.data
        }))
        if(res="Success"){
            this.props.history.push('/view')
        }else{
            res:"please check"
        }
       
    }

    render(){

      //  const {name,address,post} = this.state

        return (
            <div calssName="container">
                <h2>Login</h2>
                <form onSubmit={this.handlerSubmit}>
                    <h2 onChange={this.handlerChange}></h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td><input type="text" name="name"  onChange={this.handlerChange} /></td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td><input type="password" name="password"  onChange={this.handlerChange} /></td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="submit" value="Login" calssName="btn btn-primary" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

export default Login