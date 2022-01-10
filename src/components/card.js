import React from "react";

const Card = ({value, onClick}) => {
    return (
        <a href="#" className = "card col-sm-3  col-lg-2" onClick={onClick}>
           <p className="gender">{value.gender}</p>
           <h4 className="name">{value.name.title + " " + value.name.first + " " + value.name.last}</h4>
           <p className="email">{value.email}</p>
        </a>
    )
}

export default Card;