import React, { Component } from 'react';
import './Header.css';
import SideNav from '../SideNav/SideNav';
import Backdrop from '../Backdrop/Backdrop';


class Header extends Component {
    state = {
        showSideNav: false
    }
    render() {

        return (
            <div className="HeaderContainer">
                <SideNav show={this.state.showSideNav} 
                    close={() => this.setState({showSideNav: false})} />
                <Backdrop show={this.state.showSideNav} 
                    close={() => this.setState({showSideNav: false})} />
                <div className="Header">
                    <div className="MenuButton" onClick={()=>this.setState({showSideNav: true})} >
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="Logo">Skipped.io</div>
                    <div className="Search">
                        <input type="text" placeholder="Search for your dream candidate" />
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="NavItems">
                        <div>CANDIDATES</div>
                        <div>RECRUITERS</div>
                        <div>COMPANIES</div>
                        <div>ABOUT</div>
                    </div>
                    <div className="EmailAccounts">
                        <i className="far fa-envelope"></i>
                        <i className="far fa-bell"></i>
                        <div>
                            <div></div>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Header;