import Card from "./components/Card";
import array from "./assets/data";
import Input from "./components/Input";
import { useState } from "react";

// function random(num) {
//   return Math.floor(Math.random() * num);
// }

export default function App() {
  const [ number, setNumber ] = useState(0);

  const [ flip, setFlip ] = useState(false);
  const [ inputBoxValue, setinputBoxValue ] = useState("");
  const [ isCorrect, setIsCorrect ] = useState("")

  function updateInput(e){
    setinputBoxValue(e.target.value)
    // console.log(inputBoxValue)

  }

  function compare(){
    if (array[number]["answer"] == inputBoxValue){
      // console.log("SAme ")
      setIsCorrect(true)

    }else{
      setIsCorrect(false);
      // console.log("Not same")

    }
  }
  let result;
  if(isCorrect == ""){
    result = <p className="w-30 h-10 px-4 bg-blue-600">Answer: Not Answered Yet</p>
  }else if (isCorrect === true) {
    result = <p className="w-30 h-10 px-4 bg-blue-600">Answer: CORRECT</p>
  }else {
    result = <p className="w-30 h-10 px-4 bg-blue-600">Answer: WRONG</p>
  }
  
  
  function moveForward() {
    if (number == 9 || number == 10){
      setNumber(0)

    }else{
      setNumber(number + 1);

    }
    setFlip(false)
  }
  
  function moveBackward() {
    if (number == 0){
      setNumber(9)
      setinputBoxValue("")
    }else{
      setNumber(number - 1);
      setinputBoxValue("")
    }
    setFlip(false)
  }
  
  
  
  function changeFLip(){
    setFlip(!flip)
  }
  return (
    <div className="h-screen flex flex-col" style={{backgroundImage: `url(https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/nigeria-flag-nomonkey-b.jpg)`,
    
  }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex flex-col items-center justify-center gap-3 text-white">
        <h1 className="text-xl">Get to know Nigeria</h1>
        <p className="text-lg">Learn about the giant of Africa in a fun and interactive manner</p>
        <p>Number of Cards: 10</p>
      </div>
      <br />
      <br />
      <div className="flex justify-center text-3xl">
        <Card
          content = {flip ?array[number]["answer"]: array[number]["question"]}
          changeCard = {changeFLip}
          handleClick={changeFLip}
          color = {array[number]["color"]}
        />
      </div>
      <br />
      <br />
  <div className="flex gap-4 justify-center py-4">
      <Input updateInput={updateInput}/>
      <button className="w-20 h-10 px-4 bg-yellow-600 rounded-md" type="submit" onClick={compare}>Submit</button>
    {result}
  </div>
      <div className="flex justify-center gap-2"> 
        <button className="w-20 h-10 px-4 bg-orange-600 rounded-md" onClick={moveBackward}>Previous</button>

        <button className="w-20 h-10 px-4 bg-orange-600 rounded-md" onClick={moveForward}>Next</button>
      </div>
    </div>
  );
}
