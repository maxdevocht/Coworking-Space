import React from "react";

export default function Card(props) {

    let badgeText
    if (props.item.exclusive) {
        badgeText = "Exclusive"
    }

    return (
        <div className="cards">
            <div className="card">
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img src={`./src/assets/images/${props.item.img}`} className="card--img" />
                <div className="card--bottom">
                    <p className="description">{props.item.description}</p>
                    <button className="card--btn">Book</button>
                </div>
            </div>
        </div>
    )
}