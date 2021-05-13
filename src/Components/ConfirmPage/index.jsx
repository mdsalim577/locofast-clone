import React from 'react'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function ConfirmPage({}) {
    return (
        <div className = "last_page_right">
            <div className="confirmation">
                <div className="confirm_text">
                <InfoOutlinedIcon /><span style = {{padding:"10px"}}>You won't be able to change the details later.</span>
                </div>
            </div>
            <div className="content">
                <div className = "factory">
                    <p>Factory</p>
                </div>
                <div className="factory_name">
                    <p>Amaya Creations</p>
                </div>
            
                <div className="assign_for_design">
                    <p>Assign for design</p>
                </div>
                
                <div className="design_name">
                    <p>Men Navy Blue Slim Fit Single-Breasted Suit</p>
                </div>
                <div className="assign_qty">
                    <p>Assign quantity</p>
                </div>
                <div className="qty">
                    <p>600 meter</p>
                </div>
                
            </div>
            </div>
    )


}

export default ConfirmPage
