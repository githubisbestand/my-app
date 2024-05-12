import React from "react";

function Table()
{
    
    return(
        <>
           <div className="component">
                <table className="table-one">
                  <tbody>
                    <tr>
                       <td className="data-one">
                            <h2>Details</h2>
                            <div className="div-one">
                                <p><input type="radio" />Lone Details</p>
                                <button className="btn-one">+</button>
                            </div>                          
                            <div className="div-one">
                                <p><input type="radio" />Customer Details</p>
                                <button className="btn-one">+</button>
                            </div>                          
                            <p><input type="radio" />Income Details</p>
                            <p><input type="radio" />Property Details</p>
                            <p><input type="radio" />Documents</p>
                       </td>
                    </tr>
                    <hr />
                    <tr>
                       <td className="data-two">
                            <h2>Status</h2>
                            <div className="div-one">
                                <p><input type="radio" />New lead</p>
                                <button className="btn-one">+</button>
                            </div>                          
                            <div className="div-one">
                                <p><input type="radio" />Contacted </p>
                                <button className="btn-one">+</button>
                            </div>                          
                            <p><input type="radio" />Logged in</p>
                            <p><input type="radio" />Sanctioned</p>
                            <p><input type="radio" />Disbursed</p>
                       </td>
                    </tr>        
                </tbody>            
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
                                <td><i class="fa-regular fa-clock"></i></td>
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
                <table className="table-three">
                    <tbody>
                        <tr>
                            <td className="data-Eight">
                                <h2>Sanctioned</h2>
                                <a href="#">Update</a>
                            </td>
                        </tr>
                        <tr>
                           <td className="list-rectengle">
                                <td className="upper">
                                    <td className="first">
                                        <p><i class="fa-solid fa-list"></i></p>
                                    </td>
                                    <td className="second">
                                        <p>Sanction Checklist</p>
                                        <p><i class="fa-solid fa-triangle-exclamation"></i>OTC : Foreclosure required</p>
                                    </td>
                                </td>
                                <td className="arrow">
                                     <i class="fa-solid fa-angle-right"></i>
                                </td>
                            </td>       
                        </tr>
                        <tr>
                            <td className="data-Nine">
                                <input type="text" placeholder="Approvend Amount" className="text" />
                                <input type="text" placeholder="Sanction ID" className="text"/>
                            </td>  
                        </tr>
                        <tr>
                            <td className="data-Nine">
                                <input type="date" placeholder="Approvend Amount"className="text-one" />
                                <input type="text" placeholder="Sanction ID" className="text" />
                            </td>  
                        </tr>
                        <tr>
                            <td className="data-ten"> 
                                <input type="file" class="custom-file-input"/>
                            </td>
                        </tr>

                        <tr>
                            <td className="data-Eighteen">
                                <label class="toggle-switch">
                                    <input type="checkbox"/>
                                    <span class="slider round"></span>
                                </label>
                                <p>Sanctioned with OTC</p>

                            </td>
                        </tr>

                        <tr>
                            <td className="data-twelve">
                                <input type="text" placeholder="comment" className="comment"/>
                            </td>
                        </tr>
                        <tr>
                            <td className="data-eleven">
                               <p> Schedule a follow up now : <input type="date" className="inpt"/></p>
                            </td>
                        </tr>
                        <tr>
                            <td className="data-thirteen">
                                <a href="#" className="cube"> verified</a>
                                <a href="#" className="cube">verification Faield</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
           </div>
        </>
    )
}
export default Table;