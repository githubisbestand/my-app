import React, { useState } from "react";

function NewLead()
{

    const [curData, setData] = useState(false);
    const [connect, setConnect] = useState(false);

    const handleClick = () =>{
        setData(true);
    }
    const handleNoClick = () =>{
        setData(false);
    }

    const Connected = () =>{
        setConnect(false);
    }
    const NoConnected = () =>{
        setConnect(true);
    }
    return(
        <>
           <div className="container">
                <table className="first-Table">
                    <tr>
                        <td>
                            <h2 className="second-Heading">Details</h2>
                            <tr>
                                <td>
                                    <p><input type="radio"  />Loan Details</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><input type="radio"  />Loan Details</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><input type="radio"  />Loan Details</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><input type="radio"  />Loan Details</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><input type="radio"  />Loan Details</p>
                                </td>
                            </tr>
                        </td>
                    </tr>  
                    <hr /> 
                    <tr>     
                        <td>
                            <h2 className="second-Heading">Status</h2>
                                <tr>
                                    <td>
                                        <p><input type="radio"  />Loan Details</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p><input type="radio"  />Loan Details</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p><input type="radio"  />Loan Details</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p><input type="radio"  />Loan Details</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p style={{marginBottom:"70px"}}><input type="radio"  />Loan Details</p>
                                    </td>
                                </tr>
                        </td>
                    </tr>   
                </table>
                <table className="table-two">
                    <tbody>
                        <tr>
                            <td className="data-three">
                                <p>Document Upload</p>
                                <p>Post disbursal document <span>
                                <label class="toggle-switch">
                                    <input type="checkbox"/>
                                    <span class="slider round"></span>
                                </label>
                                </span> pre login Document</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="data-four">
                                <td>
                                    <p className="category">Category</p>
                                    <select>
                                        <option>Identity proff</option>
                                    </select>
                                </td>
                                <td>
                                    <p className="Document">Document</p>
                                    <select>
                                        <option>Identity proff</option>
                                    </select>
                                </td>
                                <td><i class="fa-solid fa-list"></i></td>
                            </td>
                        </tr>
                        <tr>
                            <td className="data-five">
                                <a href="#" className="nav-link">prakas'h Document</a>
                                <a href="#" className="nav-link">Raviendar's Document</a>
                                <a href="#" className="nav-link">Anish's Document</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="data-six">
                                <input type="file" className="input-field"/>
                            </td>
                        </tr>
                        <tr>
                            <td className="data-seven">
                                <a href="#" className="link-table">Vaeifey</a>
                                <a href="#" className="link-table">Reject/Re-upload</a>
                            </td>
                        </tr>
                    </tbody>
                    
                </table>
                <table className="Third-Table">
                    <tr>
                        <td className="firstApproved">
                            <tr>
                                <td className="table-data">
                                    <h3>New Lead</h3>
                                    <p>Malhar Trivedi Harish <i class="fa-solid fa-phone-volume"></i></p>
                                </td>
                            </tr>
                            <tr>
                                <td className="calling-user">
                                    <p>Did you attempt calling this user?</p>
                                    <div className="yes-no">
                                            <p> <input type="radio" checked={!curData} onClick={handleNoClick} /> No</p>
                                            <p> <input type="radio" checked={curData} onClick={handleClick}  /> Yes</p>
                                    </div>
                                </td>
                            </tr>
                            {curData && (
                                <tr>
                                    <td className="calling-user">
                                        <p>Was the call connected?</p>
                                        <div className="yes">
                                                <p> <input type="radio" checked={!connect} onClick={Connected} /> Connected</p>
                                                <p> <input type="radio" checked={connect} onClick={NoConnected} /> Not Connected</p>
                                        </div>
                                        {connect &&(
                                        <td>
                                           <select className="select-one">
                                            <option>Invailed phone Number</option>
                                           </select>
                                        </td>
                                        )}
                                    </td>
                                </tr>
                            )}
                        </td>
                    </tr> 


                    <tr>
                        <td className="secondApproved">
                            <tr>
                                <td className="date-time">
                                    <p>Schedule a follow up now : <input type="date" className="date"/></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" placeholder="comment" className="txt"/>
                                </td>
                            </tr>   
                            <tr>
                                <td className="btn-one">
                                    <button>save</button>
                                </td>
                            </tr> 
                        </td>
                    </tr>                              
                </table>
           </div>
        </>
    )
}
export default NewLead;