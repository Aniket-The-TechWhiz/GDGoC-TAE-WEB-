import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
    return (
        <div className="admin-dashboard-container">
            <div className="admin-main-content">
                <h1 className="text-3xl font-bold mb-4">GDGoC - TAE Admin Panel</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Welcome, Administrator! Manage your GDGoC - TAE website content here.
                </p>
            </div>
        </div>
    );
};

export default AdminDashboard;