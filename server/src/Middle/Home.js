import React from "react";

function Home(){
    return(
        <>
            <div className="Container">
                <div className="ContainerFluid">
                    <div className="Left">
                       <div className="top">
                            <h2>Welcome to<span className="hassle"> Hassle-Free</span></h2>
                            <h2>Home Loans</h2>
                       </div>
                       <div className="middle">
                            <div className="first">
                                <li><i class="fa-solid fa-star"></i>Dedicated Maneger</li>
                                <li><i class="fa-solid fa-star"></i>Dedicated Maneger </li>
                            </div>
                            <div className="second">
                                <li><i class="fa-solid fa-star"></i>Low interest Maneger</li>
                                <li><i class="fa-solid fa-star"></i>Low interest Maneger </li>
                            </div>
                       </div>

                       <div className="Last">
                            <button className="btnOne">Get a new Loan</button>
                            <button className="btnTwo">Transfer Existing Loan</button>
                       </div>
                    </div>

                    <div className="right">
                        <img src="/img/man.svg" width="350" height="400" alt="man"/>
                    </div>
                </div>
            </div>

            <div className="seconPart">
                <div className="firstPoint">
                    <div className="upper">
                        <p>our partner Bank</p>
                        <div className="mind">
                            <button className="btn"><img src="/Bank/left.svg"  width="50" height="40" alt="right" /></button>
                                <li className="Bank">
                                    <img src="/Bank/SBI.svg"  width="70" height="50" alt="sbi" />
                                    <img src="/Bank/Axis.svg"  width="70" height="50" alt="Axis" />
                                    <img src="/Bank/HDFC.svg"  width="70" height="50" alt="HDFC" />
                                    <img src="/Bank/icici.svg"  width="70" height="50" alt="icici" />
                                    <img src="/Bank/baroda.svg"  width="70" height="50" alt="baroda" />
                                    <img src="/Bank/yes.svg"  width="70" height="50" alt="yes" />
                                    <img src="/Bank/PNB.svg"  width="70" height="50" alt="pnb" />
                                </li>
                            <button className="btn"><img src="/Bank/right.svg"  width="50" height="40" alt="left" /></button>
                        </div>
                    </div>

                    <div>
                        <div className="hello"> 
                            <h3>Fast & Easy Loan Process</h3>
                            <p>lorem nho noiho jioh lkhohl lkoi nio lkhioh</p>
                        </div>

                        <div className="secondMind">
                            <div>
                                <img src="/Bank/first.svg"  width="80" height="70" className="image" alt="first" />
                                <h3>1. check Eligblity</h3>
                                <p className="para">
                                    lorem ispum is simpal dummy text of the printing and typesiting
                                </p>
                            </div>
                            <div>
                                <img src="/Bank/second.svg"  width="80" height="70" className="image" alt="second" />
                                <h3>2. Get Offers</h3>
                                <p className="para">
                                    lorem ispum is simpal dummy text of the printing and typesiting
                                </p>
                            </div>
                            <div>
                                <img src="/Bank/third.svg"  width="80" height="70" className="image" alt="third" />
                                <h3>3. get Disbursel</h3>
                                <p className="para">
                                    lorem ispum is simpal dummy text of the printing and typesiting
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ThirdPart">
                <div className="seconPoint">
                    <div className="chaaya">
                        <div className="firstenv">
                            <h2 className="heading">Get your free Credit Report</h2>
                            <p className="pandu">Check your score and get your full credit report in second. 100% score!</p>
                        </div>
                        <div className="middle">
                            <div className="first">
                                <li><i class="fa-solid fa-star"></i>Dedicated Maneger</li>
                                <li><i class="fa-solid fa-star"></i>Dedicated Maneger </li>
                            </div>
                            <div className="second">
                                <li><i class="fa-solid fa-star"></i>Low interest Maneger</li>
                                <li><i class="fa-solid fa-star"></i>Low interest Maneger </li>
                            </div>
                       </div>
                       <button className="offers">Check credit offers</button>
                    </div>

                    <div>
                        <img src="/Bank/score.svg"  width="330" height="250" alt="score"/>
                    </div>
                </div>
            </div>

            <div className="fourthPart">
                <div className="ThirdPoint">
                    <div className="firstprop">
                        <h2>Advantage of Ambak</h2>
                        <p>Lorem ispum is simpal dummy text of the printing and typesiting interest</p>
                    </div>

                    <div className="secondprop">
                        <div className="fuld">
                            <img src="/Bank/1st.svg" width="40" height="40" alt="img" className="loco" />
                            <p className="maneger">Dedicated Relationalship Maneger</p>
                            <p className="lasto">your Dedicated Relationalship Maneger, Avilable 24/7 for you</p>
                        </div>
                        <div className="fulde">
                            <img src="/Bank/2nd.svg" width="40" height="40" alt="img" className="loco" />
                            <p className="maneger">Dedicated Relationalship Maneger</p>
                            <p className="lasto">your Dedicated Relationalship Maneger, Avilable 24/7 for you</p>
                        </div>
                        <div className="fuldy">
                            <img src="/Bank/3rd.svg" width="40" height="40" alt="img" className="loco" />
                            <p className="maneger">Dedicated Relationalship Maneger</p>
                            <p className="lasto">your Dedicated Relationalship Maneger, Avilable 24/7 for you</p>
                        </div>
                        <div className="fuldee">
                            <img src="/Bank/4th.svg" width="40" height="40" alt="img" className="loco" />
                            <p className="maneger">Dedicated Relationalship Maneger</p>
                            <p className="lasto">your Dedicated Relationalship Maneger, Avilable 24/7 for you</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;