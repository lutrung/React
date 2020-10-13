// state less component là component function(react function component)
// Cú pháp tạo Stateless component : rfc => enter
import React from 'react'


export default function DemoStateless() {

        // bên trong lệnh return của function component là nội dung giao diện của thẻ này. Lưu ý nội dung component phải đc bao phủ bởi MỘT THẺ BẤT KÌ
    return (
        //thẻ vô hình <> ko hiển thị ra
        <> 
        <div className='container'>
            <div className="card text-white bg-primary w-25">
                <img className="card-img-top" src="http://picsum.photos/200/200" alt />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                </div>
            </div>
        </div>
        </>
    )
}
