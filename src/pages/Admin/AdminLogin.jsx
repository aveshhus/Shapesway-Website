import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminLogin.css';

const AdminLogin = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password
            });

            if (response.data.success) {
                localStorage.setItem('adminToken', response.data.data.token);
                localStorage.setItem('adminUser', JSON.stringify(response.data.data.user));
                onLogin(response.data.data.user);
                navigate('/admin/dashboard');
            }
        } catch (err) {
            setError(err.response?.data?.error || 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-login-page">
            <div className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <h2>Shapesway Admin Panel</h2>
                        <p>Sign in to manage your website</p>
                    </div>

                    {error && <div className="login-error">{error}</div>}

                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="admin@shapesway.in"
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            disabled={loading}
                            style={{ width: '100%' }}
                        >
                            {loading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>

                    <div className="login-footer">
                        <p>Default credentials: admin@shapesway.in / admin123</p>
                        <small>Note: Change password after first login</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
