import './SingleCard.css'

export default function SingleCard({ card, handleChoice, flipped, disabled }){

  const handleClick =() => {
    if(!disabled){
    handleChoice(card)
  }
}

  return (
<div className="card" >
    <div className={flipped ? "flipped" : ""}>
      <input type="image"
      className="front"
      src={card.src}
      alt="card front"
      />

        <input type="image"
       className="back"
       src="/img/cover.png"
       alt="card back"
       onClick={handleClick}
       />
    </div>
  </div>
  )
}