import React, { Component } from 'react';
import DashboardSideNav from '../DashboardSideNav/DashboardSideNav';
import Piechart from '../Charts/Piechart';


class Recruiter extends Component {

    render() {
        let hashColor = 'lightgrey';
        let lightBlue = 'rgb(51, 183, 235)';
        return (
            <div className="Recruiter">
                <DashboardSideNav />
                <div className="Body">
                    <div className="RecruiterHeader">
                        <h3>Candidate Profile</h3>
                        <i>Edit</i>
                    </div>
                    <div className="Tabs">
                        <div className="TabItem">
                            <div>My Profile</div>
                            <div className="Line" ></div>
                        </div>
                        <div className="TabItem">
                            <div>Resume</div>
                            {/* <div className="Line" ></div> */}
                        </div>
                    </div>
                    <div className="Hr"></div>
                    <div className="Profile">
                        <div className="ImageInformation">
                            <div className="Image"></div>
                            <div className="Information">
                                <h3 className="Name">
                                    Ekene Obasey
                                </h3>
                                <div>
                                    <div className="OthersCandidate">
                                        <div className="KeyValue">
                                            <div className="Key">Prefered Role</div>
                                            <div className="Value">
                                                <div className="Crumbs" style={{ background: hashColor }}>UI Engineer</div>
                                                <div className="Crumbs" style={{ background: hashColor }}>UX Engineer</div>
                                                <div className="Crumbs" style={{ background: hashColor }}>Fullstack Engineer</div>
                                                <div className="Crumbs" style={{ background: hashColor }}>Fullstack Engineer</div>
                                                <div className="Crumbs" style={{ background: hashColor }}>Fullstack Engineer</div>
                                                <div className="Crumbs" style={{ background: hashColor }}>Fullstack Engineer</div>
                                            </div>
                                        </div>
                                        <div className="KeyValue">
                                            <div className="Key">Current Location</div>
                                            <div className="Value">Palo Alto, CA. 94024</div>
                                        </div>
                                        <div className="KeyValue">
                                            <div className="Key">Willing to Relocate</div>
                                            <div className="Value">Yes</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Hr" style={{ marginTop: 20 }} ></div>
                        <div className="CompanyFollowing">
                            <div>
                                <p>Following Recruiter</p>
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
                                <p>Following Company</p>
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
                        <div className="Hr" style={{ marginTop: 20 }} ></div>
                        <div className="KeyValueCandidate">
                            <div className="KeyCandidate">
                                <h3>Summary</h3>
                            </div>
                            <div className="ValueCandidate">
                                Lorem ipsum dolor sit amet consectetur adipisici
                                ng elit. Quis officia tempore illo fuga aspernatu
                                r eligendi delectus nisi vitae ipsam sed quae, qu
                                i cum dicta dolorem. Rem suscipit eligendi quam n
                                esciunt.
                            </div>
                        </div>
                        <div className="KeyValueCandidate">
                            <div className="KeyCandidate">
                                <h3>Skills</h3>
                            </div>
                            <div className="ValueCandidate">
                                <Piechart />
                                <div className="Legend">
                                    <div>
                                        <p>Top Skills</p>
                                        <div>
                                            <div>Python</div>
                                            <div>Java</div>
                                            <div>React</div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Secondary Skills</p>
                                        <div>
                                            <div>Front-End Development</div>
                                            <div>PL-SQL</div>
                                            <div>Data Science</div>
                                            <div>PHP</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="KeyValueCandidate">
                            <div className="KeyCandidate">
                                <h3>Industry Experience</h3>
                            </div>
                            <div className="ValueCandidate ExperienceContainer">
                                <div className="Experience">Consumer Electronics</div>
                                <div className="Experience">Social</div>
                                <div className="Experience">Networking</div>
                                <div className="Experience">Software</div>
                                <div className="Experience">Fintech</div>
                                <div className="Experience">Business</div>
                                <div className="Experience">Consulting</div>
                            </div>
                        </div>
                        <div className="KeyValueCandidate">
                            <div className="KeyCandidate">
                                <h3>Year of Experience</h3>
                            </div>
                            <div className="ValueCandidate ExperienceContainer">
                                <div className="Experience">1 - 3 years</div>
                                <div className="Experience">3 - 5 years</div>
                                <div className="Experience">5 - 10 years</div>
                                <div className="Experience">10+ years</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Recruiter;