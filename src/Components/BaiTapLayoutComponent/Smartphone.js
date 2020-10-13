import React, { Component } from 'react'
import SmartphoneItem from './SmartphoneItem'

export default class Smartphone extends Component {
    render() {
        return (
            <div>
                <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark" >
                    <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                    <div className="row">
                        <SmartphoneItem/>
                        <SmartphoneItem/>
                        <SmartphoneItem/>
                        <SmartphoneItem/>
                    </div>
                </section>
            </div>
        )
    }
}
