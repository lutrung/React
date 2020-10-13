import React, { Component } from 'react'

export default class HandleEvent extends Component {

    showTitle = ()=>{
        alert('Hello CyberSoft')
    }
    showMess = (mess) => {
        alert(`hello ${mess}`);
    }
    render() {
        return (
            <div>
                {/* Xử lý sự kiện truyền callback */}
                <button onClick={this.showTitle}>Hello</button>

                {/* Xử lý sự kiện sử dụng hàm trung gian THÔNG DỤNG ko có tham số dùng hàm không có tham số*/}
                <button onClick={()=>{this.showTitle();
                }}>Hello</button>

                <br/> <br/>

                <button onClick={this.showMess.bind(this,'Trung ES5')}>ShowMess ES5</button>


                {/* THÔNG DỤNG có tham số dùng hàm có tham số*/}
                <button onClick={()=>{this.showMess('Trung ES6');}}>ShowMess ES6</button>
            </div>
        )
    }
}
// test
