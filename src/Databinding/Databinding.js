import React, { Component } from 'react'

export default class Databinding extends Component {
    // trỏ tới phương thức dùng this
    // Thuộc tính của lớp đối tượng => sử dụng đc ở nhiều phương thức trong lớp đối tượng
    hocVien = {
        ma: 1,
        avatar: 'http://picsum.photos/200/200',
        tenHocVien: 'Nguyễn văn tèo'
    }

    // Phương thức => phương thức có thể gọi trong các phương thức khác của lớp đối tượng
    renderHocVien = () => {
        return <div className="card text-white bg-primary w-25">
            <img className="card-img-top" src={this.hocVien.avatar} alt />
            <div className="card-body">
                <h4 className="card-title">{this.hocVien.tenHocVien}</h4>
                <p className="card-text">{this.hocVien.ma}</p>
            </div>
        </div>

    }

    render() {
        // Binding data LÀ BIẾN
        let title = 'CyberSoft';
        let imgSrc = 'http://picsum.photos/200/200';


        // Binding data LÀ HÀM
        const renderImg = () => {

            // Giá trị hàm muốn render ra giao diện phải trả về chuỗi, số hoặc jsx
            return <div className="card text-white bg-primary">
                <img className="card-img-top" src={imgSrc} alt />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                </div>
            </div>

        }
        return (
            <div className="container">
                <div id="title">{title}</div>
                <div className="w-25">
                    <img src={imgSrc} />
                </div>
                <input className="w-50 form-control" value={title} />
                Databinding
                <div>
                    {renderImg()}
                </div>
                <h1>Thông tin học viên</h1>
                <ul>
                    <li>Mã học viên: {this.hocVien.ma}</li>
                    <li>Tên học viên: {this.hocVien.tenHocVien}</li>
                    <li>Avatar: <img src={this.hocVien.avatar} width="200" height="200" /></li>
                </ul>
                {this.renderHocVien()}
            </div>
        )
    }
}
