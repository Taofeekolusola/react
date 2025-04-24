import React from 'react';

const Dashboard = ({logout}) => {
    return (
        <div>
            <h2>Welcome To Dashboard</h2>
            <button onClick={logout}>Logout</button> 
        </div>
    );
};

export default Dashboard;