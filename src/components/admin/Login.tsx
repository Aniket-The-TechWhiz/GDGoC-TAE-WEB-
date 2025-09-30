import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [adminKey, setAdminKey] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (adminKey === 'supersecretkey') {
            localStorage.setItem('x-admin-key', adminKey);
            navigate('/admin');
        } else {
            setError('Incorrect key. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Admin Login</h2>
                <form onSubmit={handleLogin} className="login-form">
                    <div className="form-group">
                        <label htmlFor="adminKey">Admin Key</label>
                        <input
                            id="adminKey"
                            name="adminKey"
                            type="password"
                            required
                            value={adminKey}
                            onChange={(e) => setAdminKey(e.target.value)}
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="login-button">
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;