import React, {useState} from 'react'
import Select from 'react-select'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
 


function PageTwo({dropdown1,setDropdown1}) {

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
    var factory =[
        {
            value:1,
            label: "Amaya Creations"
        },
        {
            value:2,
            label: "Raymond Ltd."
        },
        {
            value:3,
            label: "Vardhman Textiles Ltd."
        },
        {
            value:4,
            label: "Welspun India Ltd."
        },
        {
            value:1,
            label: "Amaya Creations"
        },
    ];

    var design = [
        {
            value:1,
            label:"Design name 1"
        },
        {
            value:2,
            label:"Design name 1"
        },
        {
            value:3,
            label:"Design name 3"
        },
        {
            value:4,
            label:"Design name 4"
        },
        {
            value:1,
            label:"Design name 1"
        },
        
    ]
    // const[dropdown1,setdropdown1] = useState();
    // const[dropdown2,setdropdown2] = useState();
    const[qty,setQty] = useState();

    
    function quantity(e){
        setQty(e.target.value)
    }
    return (
        <div className = "right">
            <div className="Factory">
                            <p style = {{marginBottom:"0.5rem"}}>Factory*</p>    
                            <Select options = {factory} theme={customTheme} onChange= {setDropdown1} />
                        </div>
                        {/* {console.log(dropdown1.label)} */}
                        
                        <div style = {{marginBottom:"1rem"}} className="design">
                            <p style = {{marginBottom:"0.5rem"}}>Assign for design*</p>    
                            <Select options = {design} theme={customTheme} onChange= {setDropdown1}/>
                        </div>
                        <div style = {{marginBottom:"1rem"}} className="quantity">
                            <div style = {{marginRight:"2rem"}} className="quantity_input">
                                <p style = {{marginBottom:"0.5rem"}}>Assign quantity*</p>
                                {/* <input style = {{width:"320px", height:"34px", borderRadius:"2px", border:"1px solid grey"}} 
                                type = "text" onChange = {quantity}></input> */}
                                
                                <InputGroup className="mb-3">
                                <FormControl
                                  placeholder="Enter Quantity"
                                />
                            </InputGroup>
                            </div>
                            <div className="availability">
                                <p style = {{marginBottom:"0.9rem"}}>Available Inventory</p>
                                <span>1650 meter</span>
                            </div>
                        </div>
                        <div className="challan">
                            <p style = {{marginBottom:"0.5rem"}}>Attach Challan*</p>

                        </div>
                        <div className="insert_file">
                        <Form>
                            <Form.File 
                              id="custom-file"
                              label="Attach Challan"
                              custom
                             />
                            </Form>
                        </div>
        </div>
    )
}

export default PageTwo
