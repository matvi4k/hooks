import { useState } from "react";

export default function Input() {
    // const inputText = useState({})
    // console.log(inputText)// [(), setInputText]
    const [inputText, setInputText] = useState('')
    function handleChange(e) {
        setInputText(e.target.value)
    }
    function clearInput(){
        setInputText('')
    }
  return (
    <div>
      <input onChange={handleChange} type="text" value={inputText}/>
      <p>{inputText}</p>
      <button onClick={clearInput} type="button">Clear</button>
    </div>
  );
}
