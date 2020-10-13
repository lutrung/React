import React, { Component } from 'react'

export default class DemoConditionalAndState extends Component {
    // isLogin là thuộc tính của class 
    //      True: đã login => hiện tên người dùng
    //      False: chưa login => hiện nút login


    // state là trạng thái của component dùng để lưu và cập nhật những biến cần thay đổi
    state = {
        isLogin : false,
    };

    // isLogin = false;  cách này sai vì render ko chạy lại ( dùng state)

    // Phương thức của class
    handleLogin = ()=>{
        // this.isLogin = true;
        // this.state.isLogin = true; cách này cũng sai vì render cũng ko chạy lại

        // setState vừa thay đổi đc giá trị vừa render chạy lại
        this.setState({
            isLogin : true,
        })
    };

    renderLogin = ()=>{
        if(this.state.isLogin){
            return <button className="btn btn-success">Login thành công</button>             
        }else{
            return <button className="btn btn-danger" onClick={this.handleLogin}>Login</button>
        }
    }
    // render là phương thức cập nhật lại giao diện
    render() {
        console.log('Run render');
        return (
            <div>
                <h2>Conditional And State</h2>
                {this.renderLogin()}
            </div>
        )
    }
}
