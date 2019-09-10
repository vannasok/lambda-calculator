import React, {useState} from "react";
import {specials} from '../../../../src/data';

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState (specials);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       
        specialState.map((buttonSP, index)=>(
          <SpecialButton key={index} buttonSP={buttonSP}/>
        ))
       } 
       
    </div>
  );
};

