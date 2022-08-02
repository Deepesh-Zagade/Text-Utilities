import React, { useState } from 'react'

export default function About(props) {

    // const [mystyle, setmystyle] = useState({
    //     color: props.mode==="dark"? "white":"black" ,
    //     backgroundColor: props.mode==="dark"? "black":"white"
    // })
    
    const mystyle = {
        color: props.mode==="dark"? "white":"black" ,
        backgroundColor: props.mode==="dark"? "#28337e":"white"
    }

    

    return (
        <>
            <div className='container' style={mystyle}>
                <h1 className='my-3' >About Text Utilities</h1>
                <div >
                    <strong >Analyze your Text</strong>
                    <h5 className="my-3">Text Utilities gives you a way to analyze your text quickly and efficiently.Be it Word Count or Character Count. <br />
                    Other than displaying statistics for a given text , you can also modify the text in the following ways...</h5>
                    <strong>- It can convert the text into Uppercase. <br /></strong>
                    <strong>- It can convert the text into Lowercase. <br /></strong>
                    <strong>- It can Copy the Written text to Clipboard. <br /></strong>
                    <strong>- It can filter the extra White Spaces in the text. <br /></strong>
                    <strong>- It can Find a specific word and replace it with another word of your choice.</strong>


                </div>
            </div>
        </>
    )
}
