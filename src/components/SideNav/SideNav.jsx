import React from 'react';
import './SideNav.css';


const SideNav = props => {
    return (
        <div className="SideNav" style={{ transform: props.show ? 'translateX(0)' : 'translateX(-100vw)' }} >
            <div className="SearchSideNav">
                <input type="text" placeholder="Search for your dream candidate" />
                <i className="fas fa-search"></i>
            </div>
            <div className="NameActive">
                <div className="Name">
                    <h3>Thankurjeet B.</h3>
                    <p>FOX Capital</p>
                </div>
                <span>Active</span>
            </div>
            <div className="SideNavItem" >Dashboard</div>
            <div className="SideNavItem" >Profile</div>
            <div className="SideNavItem" >Settings</div>
            <div className="SideNavItem" >Sign Out</div>
            <br />
            <div className="Hr"></div>
            <br />
            <div className="SideNavItem" >CANDIDATES</div>
            <div className="SideNavItem" >RECRUITERS</div>
            <div className="SideNavItem" >COMPANIES</div>
            <div className="SideNavItem" >ABOUT</div>
        </div>
    )
}


export default SideNav;