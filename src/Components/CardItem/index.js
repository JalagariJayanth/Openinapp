import "./index.css"


const CardItem = props => {
    const {cardDetails} = props
    const {text,value,color,icon} = cardDetails
    return(
        <li className="cardContainer" style={{backgroundColor:color}}>
            <img className="icon" src={icon} alt="icon" />
            <p className="card_text">{text}</p>
            <p className="card_number">{value}</p>
        </li>
    )
}
export default CardItem