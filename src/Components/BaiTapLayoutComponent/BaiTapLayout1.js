import React, { Component } from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
import Header from './Header'
import Laptop from './Laptop'
import Smartphone from './Smartphone'

export default class BaiTapLayout1 extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Carousel></Carousel>
                <Smartphone/>
                <Laptop/>
                <Footer/>
            </div>
        )
    }
}
