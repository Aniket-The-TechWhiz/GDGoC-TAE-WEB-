import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
    const [unreadCount, setUnreadCount] = useState(0);
    const location = useLocation();

    useEffect(() => {
        // In a real application, you would fetch the unread message count here.
        // For now, we will assume there are no unread messages by default to match the dashboard.
        setUnreadCount(0);
    }, []);

    return (
        <nav className="admin-sidebar">
            <div className="sidebar-header">GDGoC - TAE Admin Panel</div>
            <ul className="sidebar-nav">
                <li>
                    <Link
                        to="/admin"
                        className={`sidebar-link ${location.pathname === '/admin' ? 'active' : ''}`}
                    >
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link
                        to="/admin/events"
                        className={`sidebar-link ${location.pathname === '/admin/events' ? 'active' : ''}`}
                    >
                        Manage Events
                    </Link>
                </li>
                <li>
                    <Link
                        to="/admin/messages"
                        className={`sidebar-link ${location.pathname === '/admin/messages' ? 'active' : ''}`}
                    >
                        Messages
                        {unreadCount > 0 && (
                            <span className="notification-badge">{unreadCount}</span>
                        )}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;