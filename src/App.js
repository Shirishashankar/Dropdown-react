// Importing styles and necessary dependencies

import "./App.css";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Main component function

function App() {

     // Array of options for the dropdown

  const optionsArray = [
    "Thumsup",
    "Sprite",
    "Coca cola",
    "Fanta",
    "Pepsi",
    "Appy Fizz",
  ];
  const [openselect , setOpenSelect] = useState(false);  // State to manage the dropdown open/close state

  const leagueInput = useRef();  // Ref for the input field

  // Function to handle selecting an option

  function selectvalue(e) {
    leagueInput.current.value=e.target.outerText;
    setOpenSelect(false);
  }

  // Function to handle opening the dropdown options

  function openOption(){
    setOpenSelect(true);
  }

  // Rendering the main structure

  return (

    <div className="App">
      <div className="selectOption">
        <input 
        onClick={openOption}
        onBlur={() => {
          setOpenSelect(false);
        }}
        ref={leagueInput}
        id="league"
        type="text"
        placeholder="Select your Drink"
        readOnly
        />
        <span className={openselect ? "icon active" : "icon"}>
          <FontAwesomeIcon icon="fa-angle-down"/>
        </span>

        <div className={openselect ? "options active" : "options"}>
          {optionsArray.map((item,index) => (
            <li onClick={selectvalue} key= {index}>
              {item}
            </li>
          ))}
        </div>

      </div>
    </div>
  );
}

// Exporting the component

export default App;


