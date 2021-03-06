import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';

const Dashboard = () => {
    return (
        <div>
        <DashboardSidebar>
            <h2>Welcome to Dashboard</h2>
            <Outlet/>
        </DashboardSidebar>
        </div>
    );
};

export default Dashboard;