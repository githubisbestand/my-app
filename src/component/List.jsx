import React from "react";

function List()
{
    return(
        <>
            <table className="flued">
                <tr>
                   <td className="flued">
                        <td className="first-list">
                                <td className="front">
                                    <p><i class="fa-solid fa-angle-right"></i>Lead : #129</p>
                                    <p><i class="fa-solid fa-angle-right"></i>Customer : malhar trivedi harish <i class="fa-solid fa-phone-volume"></i></p>
                                </td>
                                <hr />
                                <td className="front">
                                    <p><i class="fa-solid fa-angle-right"></i>Bank:HDFC</p>
                                    <p><i class="fa-solid fa-angle-right"></i>Product : Home Loan</p>
                                    <p><i class="fa-solid fa-angle-right"></i>Fullfillment:Self</p>
                                </td>
                                <hr />
                                <td className="front">
                                    <p><i class="fa-solid fa-angle-right"></i>Partner:Yashika Gupta</p>
                                    <p><i class="fa-solid fa-angle-right"></i>RM:Dhiren Prakash Dongra</p>
                                </td>
                        </td>
                       
                        <td className="second-list">
                                <td className="front">
                                    <h3 className="Heading-third">Status:Loogged In</h3>
                                    <p><i class="fa-solid fa-angle-right"></i>Sub-Status:Underwriting</p>
                                    <p><i class="fa-solid fa-angle-right"></i>Last Updated on:12/03/24 20:16</p>
                                </td>
                                <hr style={{borderColor:"white"}}/>
                                <td className="front">
                                    <h3 className="Heading-third">Calling Status</h3>
                                    <p><i class="fa-solid fa-angle-right"></i>Sub-Status:Connected</p>
                                    <p><i class="fa-solid fa-angle-right"></i>Response:Customer was busy</p>
                                </td>
                                <hr />
                                <td className="front">
                                    <h3 className="Heading-third">Follow Ups</h3>
                                    <p><i class="fa-solid fa-angle-right"></i>Overdue:27/03/24 18:10</p>
                                </td>
                        </td>
                    </td>
                </tr>
            </table>

            <table className="tabul">
                <tr>    
                    <td className="tab">
                        <td className="listining">
                            <a href="#" className="clasen">Details and Status</a>
                            <a href="#" className="clasen">Documents</a>
                            <a href="#" className="clasen">Bank offer</a>
                            <a href="#" className="clasen">Loan Details</a>
                            <a href="#" className="clasen">Follow up History</a>
 
                        </td>
                        <td className="listied">
                            <a href="#" className="clasenTwo">Mark as lost</a>
                            <i class="fa-regular fa-clock"></i>
                        </td>  
                    </td>
                </tr>
            </table>
                   
        </>
    )
}
export default List;