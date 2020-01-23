import React from 'react';
import './DashboardSideNav.css';


const DashboardSideNav = props => (
    <div className="DashboardSideNav">
        <div className="NameActive">
            <div className="Name">
                <h3>Thankurjeet B.</h3>
                <p>FOX Capital</p>
            </div>
            <span>Active</span>
        </div>
        <div className="SideNavItem">
            <div className="SideNavItem" >Dashboard</div>
            <div className="SideNavItem" >Profile</div>
            <div className="SideNavItem" >Settings</div>
            <div className="SideNavItem" >Sign Out</div>
        </div>
    </div>
)

export default DashboardSideNav;