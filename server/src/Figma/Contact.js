import React,  { useState } from "react";

function Conatact()
{
    const [showVerification, setShowVerification] = useState(1);
    const [selectedButton, setSelectedButton] = useState(null); 
    const [curData, setData] = useState(false);


    const handleButtonClick = (buttonName) => {
      setSelectedButton(buttonName === selectedButton ? null : buttonName);
      setData(true)
    };
        
      const handleNextClick = () => {
          setShowVerification(showVerification + 1);
      };

    const handleClick = () =>{
            setShowVerification(showVerification -1);
    }
    

    return(
        <>
            {showVerification !== 7  && showVerification !==8 &&(
            <>
            <div className="loan">
                <div className="loanImg">
                    <img src="/img/logo5.svg" width="250" height="300" alt="Logo" />
                </div>        
                <div className="loanData">
                {showVerification  === 1  && (
                    <div className="data">
                        <div className="btneco">
                            <button className="btnSix" onClick={handleClick}><i class="fa-solid fa-arrow-left-long"></i></button><span className="LoanDetails">Loan details</span>
                        </div>
                        <ul> 
                            <li onClick={()=>handleButtonClick("left")}
                                        style={{ border: selectedButton === "left" ? "1px solid blue" : "1px solid gray",
                                                 color : selectedButton === "left" ? "blue" : " " }}
                            >Home Loan</li>            
                            <li onClick={()=>handleButtonClick("right")}
                                                style={{ border: selectedButton === "right" ? "1px solid blue" : "1px solid gray", 
                                                color : selectedButton === "right" ? "blue" : " " }}
                            >Loan Againts Property</li>
                        </ul>
                        
                        <input type="text" placeholder="Loan Amount"  className="input"/>
                        
                        <p>
                            <button className="btnNext" onClick={handleNextClick}>Next<i class="fa-solid fa-arrow-right-long"></i></button>
                        </p>
                    </div>
                )}

                {showVerification  === 2  && (
                    <div className="data">
                        <div className="btneco">
                            <button className="btnSix" onClick={handleClick}><i class="fa-solid fa-arrow-left-long"></i></button><span className="LoanDetails">Employment details</span>
                       </div>
                       <ul> 
                            <li onClick={()=>handleButtonClick("chayya")}
                                        style={{ border: selectedButton === "chayya" ? "1px solid blue" : "1px solid gray",
                                                 color : selectedButton === "chayya" ? "blue" : " "
                                         }}
                            >Salaried</li>            
                            <li onClick={()=>handleButtonClick("Prakash")}
                                                style={{ border: selectedButton === "Prakash" ? "1px solid blue" : "1px solid gray",
                                                color : selectedButton === "Prakash" ? "blue" : " "}}
                            >Self-Employed</li>
                        </ul>
                        
                        
                        <input type="text" placeholder="Loan Amount"  className="input"/>
                        <p>
                            <button className="btnNext" onClick={handleNextClick}>Next<i class="fa-solid fa-arrow-right-long"></i></button>
                        </p>
                    </div>
                )}

            
                 {showVerification  === 3  && (    
                    <div className="data">
                        <div className="btneco">
                       <button className="btnSix" onClick={handleClick}><i class="fa-solid fa-arrow-left-long"></i></button><span className="LoanDetails">Any Current EMIs?</span>
                       </div>
                       <ul> 
                            <li onClick={()=>handleButtonClick("one")}
                                        style={{ border: selectedButton === "one" ? "1px solid blue" : "1px solid gray", 
                                        color : selectedButton === "one" ? "blue" : " " }}
                            >yes</li>            
                            <li onClick={()=>handleButtonClick("Two")}
                                                style={{ border: selectedButton === "Two" ? "1px solid blue" : "1px solid gray",
                                                         color : selectedButton === "Two" ? "blue" : " " }}
                            >No</li>
                        </ul>
                        {curData &&(
                        <input type="text" placeholder="Loan Amount"  className="input"/>
                        )}                        <p>
                            <button className="btnNext" onClick={handleNextClick}>Next<i class="fa-solid fa-arrow-right-long"></i></button>
                        </p>
                    </div>
                )}
                 {showVerification  === 4  && (    
                    <div className="data">
                        <div className="btneco">
                            <button className="btnSix" onClick={handleClick}><i class="fa-solid fa-arrow-left-long"></i></button><span className="LoanDetails">Property City</span>
                        </div>
                       <ul> 
                            <li onClick={()=>handleButtonClick("first")}
                                        style={{ border: selectedButton === "first" ? "1px solid blue" : "1px solid gray", 
                                        color : selectedButton === "first" ? "blue" : " " }}
                            >Delhi NCR</li>            
                            <li onClick={()=>handleButtonClick("second")}
                                                style={{ border: selectedButton === "second" ? "1px solid blue" : "1px solid gray", 
                                                color : selectedButton === "second" ? "blue" : " " }}
                            >Hyderbad</li>
                        </ul>

                       <div className="lo">
                            <li onClick={()=>handleButtonClick("third")}
                                        style={{ border: selectedButton === "third" ? "1px solid blue" : "1px solid gray",  
                                        color : selectedButton === "third" ? "blue" : " " }}
                            >Mumbai</li>            
                            <li onClick={()=>handleButtonClick("fourth")}
                                                style={{ border: selectedButton === "fourth" ? "1px solid blue" : "1px solid gray",  
                                                color : selectedButton === "fourth" ? "blue" : " " }}
                            >Others</li>    
                        </div>
                        <p>
                            <button className="btnNext" onClick={handleNextClick}>Next<i class="fa-solid fa-arrow-right-long"></i></button>
                        </p>
                    </div>
                )}
                 {showVerification  === 5  && (    
                    <div className="data">
                        <div className="btneco">
                       <button className="btnSix" onClick={handleClick}><i class="fa-solid fa-arrow-left-long"></i></button><span className="LoanDetails">Property Type</span>
                       </div>
                       <ul> 
                            <li onClick={()=>handleButtonClick("1st")}
                                        style={{ border: selectedButton === "1st" ? "1px solid blue" : "1px solid gray",
                                        color : selectedButton === "1st" ? "blue" : " "}}
                            >Direct Allotment</li>            
                            <li onClick={()=>handleButtonClick("2nd")}
                                                style={{ border: selectedButton === "2nd" ? "1px solid blue" : "1px solid gray", 
                                                color : selectedButton === "2nd" ? "blue" : " " }}
                            >Allotment Transfer</li>
                        </ul>

                       <div className="lo">
                            <li onClick={()=>handleButtonClick("3rd")}
                                        style={{ border: selectedButton === "3rd" ? "1px solid blue" : "1px solid gray", 
                                        color : selectedButton === "3rd" ? "blue" : " " }}
                            >Resale</li>            
                            <li onClick={()=>handleButtonClick("4th")}
                                                style={{ border: selectedButton === "4th" ? "1px solid blue" : "1px solid gray", 
                                                color : selectedButton === "4th" ? "blue" : " " }}
                            >Others</li>    
                        </div>
                        <p>
                            <button className="btnNext" onClick={handleNextClick}>Next<i class="fa-solid fa-arrow-right-long"></i></button>
                        </p>
                    </div>
                )}   
                
                {showVerification === 6  && (    
                    <div className="data">
                        <div className="btneco">
                       <button className="btnSix" onClick={handleClick}><i class="fa-solid fa-arrow-left-long"></i></button><span className="LoanDetails">Last few details</span>
                       </div>
                       <div className="name"> 
                            <input type="text" placeholder="name" className="lastUpdate" />
                            <input type="email" placeholder="Email(optional)" className="lastUppdate" />
                       </div>

                        <p>
                            <button className="btnNext" onClick={handleNextClick}>Next <i class="fa-solid fa-arrow-right-long"></i></button>
                        </p>
                    </div>
                )}                
               </div>
            </div>
            </>
            )}
            {showVerification === 7  && (   
                    <>
                        <div className="beat">
                            <div className="beten">
                                <button className="btnSeven" onClick={handleClick}><i class="fa-solid fa-arrow-left-long"></i><span className="LoanDetails">Last few details</span></button>
                                <p>Recalculation based on tenure</p>
                            </div>
                        <div className="Bank">
                            <div className="DetailsBank">
                                <div className="bankit">
                                    <div className="SBI">
                                        <img src="/img/SBI.svg" width="40" height="40" className="imgtrip" />
                                        <p className="rupess">SBI Bank</p>
                                    </div>
                                    <div>
                                        <p className="rupess">रु 10,50,12,600</p>
                                        <p className="max_Amount">max Amount</p>
                                    </div>
                                    <div>
                                        <p className="rupess">रु 10,50,12,600</p>
                                        <p className="max_Amount">max Amount</p>
                                    </div>
                                    <div>
                                        <p className="rupess">रु 10,50,12,600</p>                                            
                                        <p className="max_Amount">max Amount</p>
                                    </div>                
                                </div> 
                                <hr  style={{color:"red", height : "160px", marginTop :"80px"}} />
                                    <div className="btn8">
                                        <button className="show" onClick={handleNextClick} >Apply now</button>
                                    </div>    
                            </div>
                            <hr  style={{color:"red", width:"700px", marginTop : "30px"}} className="hiden"/>
                            <ul>
                                <li className="list">.Processing fees : 1% Loan amt % 1</li>
                            </ul>
                        </div> 

                        <div className="Bank">
                            <div className="DetailsBank">
                                <div className="bankit">
                                    <div className="HDFC">
                                        <img src="/img/HDFC.svg" width="40" height="30" className="imgtrip" />
                                        <p className="rupess">HDFC Bank</p>
                                    </div>
                                    
                                        <div>
                                            <p className="rupess">रु 10,50,12,600</p>
                                            <p className="max_Amount">max Amount</p>
                                        </div>
                                        <div>
                                            <p className="rupess">रु 10,50,12,600</p>
                                            <p className="max_Amount">max Amount</p>
                                        </div>
                                        <div>
                                            <p className="rupess">रु 10,50,12,600</p>
                                            <p className="max_Amount">max Amount</p>
                                        </div>                
                                </div> 
                                <hr  style={{color:"red", height : "160px", marginTop :"80px"}} />
                                    <div className="btn8">
                                        <button className="show" onClick={handleNextClick} >Apply now</button>
                                    </div>    
                            </div>
                            <hr  style={{color:"red", width:"700px", marginTop : "30px"}} className="hiden"/>
                            <ul>
                                <li className="list">.Processing fees : 1% Loan amt % 1</li>
                            </ul>
                        </div> 
                       
                    </div>        
                </>   
                    )} 
                {showVerification === 8 && (
                        <div className="thankyou">
                            <img src="/img/Thankyou.svg" width="500" height="250" />
                            <p className="THANK">Thank you!</p>
                            <p className="ppp">our Relationship Maneger Conatact with sortly</p>
                        </div>
                )}
        </>
    )
}
export default Conatact

