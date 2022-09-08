import React from 'react'
import sunriseImage from "./john-towner-CakC6u4d95g-unsplash.jpg"
import SubmitButton from "./SubmitButton"

function App() {
    return (
        <>
        <div className='container'>
        <div className='lottery-form'>
            <img className="splash-image" src={sunriseImage} alt="Image of a sunrise"/>
            <h1>Welcome to the Million Dollar Lottery!</h1>
            <SubmitButton initialAddress={"example@email.com"}/>
        </div>
        </div>
        </>
    )
}

export default App