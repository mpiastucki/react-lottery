import React from 'react'
import SubmitButton from './SubmitButton'

function LotteryForm(props){
    return (
        <>
        <div className='lottery-form'>
            <img className="splash-image" src={sunriseImage} alt="Image of a sunrise"/>
            <h1>Welcome to the Million Dollar Lottery!</h1>
            <SubmitButton initialAddress={"example@email.com"}/>
        </div>
        </>
    )
}