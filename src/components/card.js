

const Card = ({value, onClick}) => {
    return (
        <div className = "card" onClick={onClick}>
           <p className="gender">{value.gender}</p>
           <h4 className="name">{value.name.title + " " + value.name.first + " " + value.name.last}</h4>
           <p className="email">{value.email}</p>
        </div>
    )
}

export default Card;