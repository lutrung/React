import React, { Component } from 'react'
import LaptopItem from './LaptopItem'
import SmartphoneItem from './SmartphoneItem'

export default class Laptop extends Component {
    render() {
        return (
            <div>
                <section id="laptop" className="container-fluid pt-5 pb-5 bg-primary text-dark">
                    <h1 className="text-center">BEST LAPTOP</h1>
                    <div className="row">
                        <LaptopItem/>
                        <LaptopItem/>
                        <LaptopItem/>
                        <LaptopItem/>
                    </div>
                </section>
            </div>

        )
    }
}
