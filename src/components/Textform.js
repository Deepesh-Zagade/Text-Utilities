import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react'

export default function Textform(props) {
    const [text, settext] = useState('');
    const [findword, findtemp] =useState('');
    const [replaceword, replacetemp] =useState('');

    // button tag mein onClick event fire hone ke baad clickUp()run hoga
    const clickUp = () => {
        console.log('Uppercase button clicked')
        let updated = text.toLocaleUpperCase()         // Logic for converting existing text to Uppercase 
        settext(updated)                               // updated text using setText()
        {props.showAlert('converted to Uppercase','success')}
    }
    const clickDown = () => {
        console.log('Uppercase button clicked')
        let updated = text.toLocaleLowerCase()         // Logic for converting existing text to Uppercase 
        settext(updated)                               // updated text using setText()
        {props.showAlert('converted to Lowercase','success')}
    }
    // Clear button preesed this function will run
    const cleartext = () => {
        settext('')
        {props.showAlert('Text Cleared','success')}
    }
    // textarea tag mein onChange event fire hone ke baad ye function run hoga
    const changeIt = (changes) => {         // text area ka updation changes naam ke parameter mein hai
        settext(changes.target.value)     // abhi idhar text ke STATE ko chnge kiya using settext() aur target kiya value pe (inshort - text ko update kiya DOM pe)
    }
    // change find text area
    const changefind = (changes)=>{
        findtemp(changes.target.value)
    }
    // change replace text area
    const changereplace = (changes)=>{
        replacetemp(changes.target.value)
    }
    // function with find replace logic
    const findreplace = ()=>{
        settext(text.replaceAll(findword,replaceword))
        {props.showAlert('Words Replaced','success')}
    }
    //function to copy the written text
    const copytext = ()=>{
        let text = document.getElementById('text')
        text.select()
        navigator.clipboard.writeText(text.value)
        {props.showAlert('Text Copied to Clipboard','success')}
    }
    // function to remove extra spaces
    const removespace = ()=>{
        let cleantext = text.split(/[ ]+/) 
        settext(cleantext.join(' '))
        {props.showAlert('Extra spaces removed','success')}
    }

    return (
        <div>
            <div className="mb-2" >
                <h2>{props.heading} </h2>
                <textarea  className="form-control" id="text" value={text} onChange={changeIt} rows="5" style={{backgroundColor : props.mode === 'dark'?'#353e5d':'white',color :  props.mode === 'dark'?'white':'black'}} ></textarea>
                <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={clickUp}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={clickDown}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={removespace}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1 " onClick={copytext}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={cleartext}>Clear </button>

            </div>
            <div>
                <h4>Your text summary is</h4>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words , {text.length} Characters</p>
                <h4> Find and Replace with</h4>
                <div className="input-group mb-3">
                    <button disabled={text.length === 0} className="btn btn-primary" type="button" onClick={findreplace} >Find and Replace</button>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Enter word to find' value={findword} style={{backgroundColor : props.mode === 'dark'?'#353e5d':'white', color :  props.mode === 'dark'?'white':'black' }} onChange={changefind} rows="1"></textarea>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Enter word to replace with' value={replaceword} style={{backgroundColor : props.mode === 'dark'?'#353e5d':'white', color :  props.mode === 'dark'?'white':'black'}} onChange={changereplace} rows="1"></textarea>
                </div>
            </div>
            <h4 className='my-3'>Text Preview</h4>
            <p>{text}</p>
        </div>
    )
}
