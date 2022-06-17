import React from "react";
import './App.css'
import Card from './Card'
import data from './../data'
import Header from "./Header";

export default function App() {
    const dataArray = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div className="main-container">
            <Header />
            <div className="cards-container">
                {dataArray}
            </div>
        </div>
    )
}

