import React, {useState} from 'react'
import './styles.css'
import Modal from '../../Components/Modal'



function Cards() {

   
    
    const [clicked, setClicked] = useState()
    const[card,setCard] = useState('')
    const openModal = (e) => {
        // console.log(e)
        setCard(e.target.className)
        setClicked(true)
    }
    return (
        <>
            <div className="card_holder">
                <div onClick={openModal} className="card_1">
                    <div className="card_1_pic">
                        <img className = "card1" src = "Images/Rectangle_3.png" alt = ""></img>
                    </div>
                    <div className="card_details">
                        <span>100% Cotton Navy/White Colour Oxford Chambery</span>
                        <span>8 more colours</span>
                    </div>
                </div>
                <div onClick={openModal} className="card_2">
                    <div className="card_2_pic">
                        <img className = "card2" src = "Images/Rectangle.png" alt = ""></img>
                    </div>
                    <div className="card_details">
                        <span>100% Cotton Navy/White Colour Oxford Chambery</span>
                        <span>8 more colours</span>
                    </div>
                </div>
                <div onClick={openModal} className="card_3">
                    <div className="card_3_pic">
                        <img className = "card3" src = "Images/Rectangle_1.png" alt = ""></img>
                    </div>
                    <div className="card_details">
                        <span>100% Cotton Navy/White Colour Oxford Chambery</span>
                        <span>8 more colours</span>
                    </div>
                </div>
                <div onClick={openModal} className="card_4">
                    <div className="card_4_pic">
                        <img className = "card4" src = "Images/Rectangle_2.png" alt = ""></img>
                    </div>
                    <div className="card_details">
                        <span>100% Cotton Navy/White Colour Oxford Chambery</span>
                        <span>8 more colours</span>
                    </div>
                </div>
        
            </div>
       
        {clicked && <Modal onClose={() => setClicked(null)} card = {card}/>}
        </>
    );
}

export default Cards
