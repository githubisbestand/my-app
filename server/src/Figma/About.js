import React from "react";


function About(){
    return(
        <>
           <div  className="container">
                <div className="Currentcontainer">
                    <div className="left">
                            <img src="/img/logo.svg" width="400" height="350" alt="Logo" />
                    </div>

                    <div className="right">
                        <button className="btn">x</button>
                        <h2>Check your credit report for free</h2>
                        <input type="text" placeholder="enter pan number" />
                        <button>Next-</button>
                    </div>
                </div>
           </div>
        </>
    )
}
export default About;