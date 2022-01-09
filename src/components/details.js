import React from "react";
const Details = ({value}) => {
    return(
        <div className = "details">
            <div className="col">
                <img src={value.picture.medium} alt={value.email}></img>
            </div>
            <div className="col">
                <h1 className="name">{value.name.title + " " + value.name.first + " " + value.name.last}</h1>
                <p className="address">{`${value.location.street.number}, ${value.location.street.name}, ${value.location.state}, ${value.location.country}, ${value.location.postcode}`}</p>
                <p className="timezone">{`${value.location.timezone.offset}, ${value.location.timezone.description}`}</p>
                <p className="gender">{value.gender}</p>
            </div>
        </div>
    )
}

export default Details;