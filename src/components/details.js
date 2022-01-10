import React from "react";
const Details = ({value}) => {
    return(
        <div className="container d-flex justify-content-center">
            <div className = "details row justify-content-evenly">
            <div className="col-sm-5 col-md-2 align-sm-center">
                <img src={value.picture.large} alt={value.email}></img>
            </div>
            <div className="col-sm-6">
                <h1 className="name">{value.name.title + " " + value.name.first + " " + value.name.last}</h1>
                <p className="address">{`${value.location.street.number}, ${value.location.street.name}, ${value.location.state}, ${value.location.country}, ${value.location.postcode}`}</p>
                <p className="timezone">{`${value.location.timezone.offset}, ${value.location.timezone.description}`}</p>
                <p className="gender">{value.gender}</p>
            </div>
        </div>
        </div>
    )
}

export default Details;