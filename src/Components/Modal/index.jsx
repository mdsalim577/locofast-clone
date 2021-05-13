import React ,{ useState} from 'react'
// import Select from 'react-select'
import './styles.css'
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import {Avatar} from "@material-ui/core";
import ConfirmPage from '../../Components/ConfirmPage'
import PageTwo from '../../Components/PageTwo'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'


function Modal({onClose, card}) {

    const path_1 = "Images/Rectangle_3.png"
    const path_2 = "Images/Rectangle.png" 
    const path_3 = "Images/Rectangle_1.png" 
    const path_4 = "Images/Rectangle_2.png" 
    const [lastPage, setLastPage] = useState(false)
    const [dropdown1,setDropdown1] = useState();
    const [dropdown2,setDropdown2] = useState();
    const [qty,setQty] = useState();
    
    function customTheme(theme){
        return{
            ...theme,
            colors:{
                ...theme.colors,
                primary25: '#F2F2F2',
                // primary: ''
            },
        };
    }
    
    const className = `${lastPage ? 'confirm': 'body_right'}`
    return (
        <>

          <div className="Modal">
             
                <div className="header">
                    <div className="header_title">
                        <span>Material Details</span>
                    </div>
                    <div className="close_btn">
                        <button className = "btn" onClick = {onClose}>
                            <CloseIcon />
                        </button>   
                    </div>
                </div>

                <div className="Modal_body">
                    <div className="body_pic">
                        {{card}.card === "card_1" || {card}.card === "card1" ? 
                        <img style = {{width:"329px", height:"389.86px"}} src = {path_1} alt=""></img> :
                         {card}.card === "card_2" || {card}.card === "card2" ? 
                         <img style = {{width:"329px", height:"389.86px"}} src = {path_2} alt=""></img> :
                         {card}.card === "card_3" || {card}.card === "card3" ? 
                         <img style = {{width:"329px", height:"389.86px"}} src = {path_3} alt=""></img> :
                         <img style = {{width:"329px", height:"389.86px"}} src = {path_4} alt=""></img> }
                    </div>
                    <div className={className}>
                        <div style = {{marginBottom:"1rem"}} className="assign_to_fac">
                            <div className="back_arrow">
                                <ArrowBackIcon />
                            </div>
                            <div className = "text">
                                <span>Assign to Factory</span>
                            </div>
                        </div>
                        {lastPage ? <ConfirmPage /> : 
                        <PageTwo /> }
                        
                    </div>
                </div>
                <div className="footer">
                    <hr></hr>
                    <div className="next_page">
                    <Button style = {{marginRight:"10px"}} variant="outline-secondary" 
                    onClick =  {
                        // onClose();
                        () => {setLastPage(false)}}>Back</Button>{' '}


                        <Button variant="outline-primary" onClick =  {
                                // onClose();
                                () => {setLastPage(true)}}
                                >Next

                        </Button>
                        
                    </div>
                </div>
            </div>
            {/* {setLastPage && <ConfirmPage />} */}
    </>
    )
}

export default Modal
