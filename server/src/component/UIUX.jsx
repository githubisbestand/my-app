import React from "react";
import { fackData } from "../store/api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slice/userSlice";
import Dataled from "./Dataled"; 

function UIUX()
{
    const dispatch = useDispatch();


    const addnewUser = (payload) =>{
        dispatch(addUser(payload))
        console.log(payload);
    }

    return(
        <>
            <div className="container">
                <div className="upper">
                    <p>welcome to thapa Education Hub</p>
                    <h1>ADMIN TABLE</h1>
                    <p>One Destination for complete web Devlopment</p>
                </div>
                <div className="list">
                    <a href="https://www.youtube.com/" target="_blank" >youtube</a>
                    <a href="https://www.facebook.com/" target="_blank">facebook</a>
                    <a href="https://web.whatsapp.com/" target="_blank">watsappWeb</a>
                    <a href="#">code</a>
                    <a href="#">Conatct</a>
                </div>

                <div className="last">
                    <p className="user">
                        List of User Details
                    </p>
                    <p>
                        <button onClick={()=>addnewUser(fackData())}>Add new user</button>
                    </p>
                </div>
                <ul>
                    <Dataled />
                </ul>
              
            </div>
        </>
    )
}
export default UIUX;