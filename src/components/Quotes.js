import axios from "axios";
import './Quotes.css'
import React, { useState } from 'react'
import { Button } from "react-bootstrap";

const Quotes = () => {
    const [quoteGen, setQuoteGen] = useState('Press the button to generate a Quote!');
    const fun = () => {
        axios('https://api.adviceslip.com/advice')
            .then(res => {
                setQuoteGen(res.data.slip.advice)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <>
            <div className="quote-container">
                <p className="quote">
                    {quoteGen}
                </p>
                <Button className='button' variant="outline-secondary" onClick={fun}>
                    Click here!
                </Button>
            </div>
        </>
    )
}

export default Quotes