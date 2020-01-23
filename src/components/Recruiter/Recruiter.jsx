import React, { Component } from 'react';
import './Recruiter.css';
import DashboardSideNav from '../DashboardSideNav/DashboardSideNav';


class Recruiter extends Component {

    render() {
        let hashColor = 'lightgrey';
        let lightBlue = 'rgb(51, 183, 235)';
        return (
            <div className="Recruiter">
                <DashboardSideNav />
                <div className="Body">
                    <div className="RecruiterHeader">
                        <h3>Recuiter Profile</h3>
                        <i>Edit</i>
                    </div>
                    <div className="Tabs">
                        <div className="TabItem">
                            <div>My Profile</div>
                            <div className="Line" ></div>
                        </div>
                        <div className="TabItem">
                            <div>My Companies</div>
                            {/* <div className="Line" ></div> */}
                        </div>
                        <div className="TabItem">
                            <div>My Reviews</div>
                            {/* <div className="Line" ></div> */}
                        </div>
                        <div className="TabItem">
                            <div>Favorites</div>
                            {/* <div className="Line" ></div> */}
                        </div>
                    </div>
                    <div className="Hr"></div>
                    <div className="Profile">
                        <div className="ImageInformation">
                            <div className="Image"></div>
                            <div className="Information">
                                <h3 className="Name">
                                    Thakurjeet Bharwana
                                </h3>
                                <div>
                                    <div className="Others">
                                        <div className="KeyValue">
                                            <div className="Key">Company Email</div>
                                            <div className="Value">Thakurjeet@gmail.com</div>
                                        </div>
                                        <div className="KeyValue">
                                            <div className="Key">Personal Email</div>
                                            <div className="Value">Thakurjeet@gmail.com</div>
                                        </div>
                                        <div className="KeyValue">
                                            <div className="Key">Organization Name</div>
                                            <div className="Value">FOX Capital</div>
                                        </div>
                                    </div>
                                    <div className="Others">
                                        <div className="KeyValue">
                                            <div className="Key">Phone number</div>
                                            <div className="Value">+12345678</div>
                                        </div>
                                        <div className="KeyValue">
                                            <div className="Key">Zip Code</div>
                                            <div className="Value">12345</div>
                                        </div>
                                        <div className="KeyValue">
                                            <div className="Key">Linkedin URL</div>
                                            <a className="Value">https://linkedin.com/me/</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="LeftRight">
                            <div className="Left"><h3>Skills</h3></div>
                            <div className="Right">
                                <div className="Crumbs" style={{ background: lightBlue, color: '#fff' }} >Technical Lead</div>
                                <div className="Crumbs" style={{ background: lightBlue, color: '#fff' }} >Sourcer</div>
                                <div className="Crumbs" style={{ background: lightBlue, color: '#fff' }} >HR</div>
                            </div>
                        </div>
                        <div className="LeftRight">
                            <div className="Left"><h3>My Preffered Roles</h3></div>
                            <div className="Right">
                                <div className="Crumbs" style={{ background: lightBlue, color: '#fff' }} >Java</div>
                                <div className="Crumbs" style={{ background: lightBlue, color: '#fff' }} >PHP</div>
                                <div className="Crumbs" style={{ background: lightBlue, color: '#fff' }} >Swift</div>
                            </div>
                        </div>
                        <div className="LeftRight">
                            <div className="Left"><h3>Open Roles</h3></div>
                            <div className="Right">
                                <div className="Crumbs" style={{ background: hashColor }}>UI Engineer</div>
                                <div className="Crumbs" style={{ background: hashColor }}>UX Engineer</div>
                                <div className="Crumbs" style={{ background: hashColor }}>Fullstack Engineer</div>
                                <div className="Crumbs" style={{ background: hashColor }}>Fullstack Engineer</div>
                                <div className="Crumbs" style={{ background: hashColor }}>Fullstack Engineer</div>
                                <div className="Crumbs" style={{ background: hashColor }}>Fullstack Engineer</div>
                            </div>
                        </div>
                        <div className="Hr" style={{ marginTop: 20 }} ></div>
                        <h3>Roles by Companies</h3>
                        <div className="Companies">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <h3>Following</h3>
                        <div className="CompanyFollowing">
                            <div>
                                <p>Candidate</p>
                                <div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div>
                                <p>Company</p>
                                <div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Recruiter;