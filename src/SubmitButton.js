import React, { useState } from 'react'

function SubmitButton({initialAddress}){
    const [address, setAddress] = useState(initialAddress);
    const [disabledButton, setButton] = useState(false);

    return(
        <>
            <p className='bold'>You will submit this as your email address:</p>
            <p className='italic'>{address}</p>
            <input placeholder="Enter your email to WIN!" onChange={(e)=>{setAddress(e.target.value)}}/>
            <button type="button" disabled={disabledButton} onClick={(e)=> e.currentTarget.disabled = true}>Submit</button>
        </>
    )
}

export default SubmitButton