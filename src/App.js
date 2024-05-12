import React from "react";
//import "./Redux.css";
//import { useSelector, useDispatch } from "react-redux";
//import { incNumber, decNumber } from "./action";
//import "./style.css";
//import UIUX from "./component/UIUX";
//import "./crud/style.css";
import Create from "./crudComponent/Create";
import Read from "./crudComponent/Read";
import Update from "./crudComponent/Update";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/style.css";

function App()
{
  return(
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Read />}></Route>
            <Route path="/Create" element={<Create />}></Route>
            <Route path="/Update/:id" element={<Update />}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}
export default App;

/*
function App()
{
   const mySate = useSelector((state)=>state.changeTheNumber);
  const dispatch = useDispatch();
  return(
    <>
        <div className="conatiner">
            <h1>Increment/Decrement Counter</h1>
            <h4>Using React and Redux</h4>

            <div className="quantity">
              <button className="quamtity_plush" onClick={()=>dispatch(incNumber())}>+</button>
              <input type="text" name="quantity" className="quantity_input" value={mySate}/>
              <button className="quamtity_minush" onClick={()=>dispatch(decNumber())}>-</button>
            </div>
        </div>
    </>
  )
}
export default App;
*/