import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEnvelope, FaUsers, FaComments, FaBlog, FaChartLine } from 'react-icons/fa';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        totalLeads: 0,
        newLeads: 0,
        totalBlogs: 0,
        totalConversations: 0
    });
    const [recentLeads, setRecentLeads] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchDashboardData = async () => {
        try {
            const token = localStorage.getItem('adminToken');
            const config = { headers: { Authorization: `Bearer ${token}` } };

            // Fetch leads - Note: using http://localhost:5000/api/leads as per original code
            const leadsRes = await axios.get('http://localhost:5000/api/leads', config);

            setStats({
                totalLeads: leadsRes.data.stats.total,
                newLeads: leadsRes.data.stats.new,
                totalBlogs: 0, // Will be updated when blog API is called
                totalConversations: 0
            });

            setRecentLeads(leadsRes.data.data.slice(0, 5));
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch dashboard data:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDashboardData();
    }, []);

    if (loading) {
        return (
            <div className="admin-dashboard">
                <div className="dashboard-loading">Loading dashboard...</div>
            </div>
        );
    }

    return (
        <div className="admin-dashboard">
            <div className="dashboard-header">
                <h1>Dashboard</h1>
                <p>Welcome to Shapesway Admin Panel</p>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon" style={{ background: '#E6F0FF', color: '#0066FF' }}>
                        <FaEnvelope />
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalLeads}</h3>
                        <p>Total Leads</p>
                        <span className="stat-badge">{stats.newLeads} new</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon" style={{ background: '#F0E6FF', color: '#6C5CE7' }}>
                        <FaUsers />
                    </div>
                    <div className="stat-content">
                        <h3>200+</h3>
                        <p>Happy Clients</p>
                        <span className="stat-badge">Growing</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon" style={{ background: '#E6FFF9', color: '#00D4AA' }}>
                        <FaComments />
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalConversations}</h3>
                        <p>Chat Conversations</p>
                        <span className="stat-badge">Active</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon" style={{ background: '#FFF3E6', color: '#FFB800' }}>
                        <FaBlog />
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalBlogs}</h3>
                        <p>Blog Posts</p>
                        <span className="stat-badge">Published</span>
                    </div>
                </div>
            </div>

            <div className="dashboard-section">
                <h2>Recent Leads</h2>
                <div className="leads-table">
                    {recentLeads.length > 0 ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Source</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentLeads.map((lead) => (
                                    <tr key={lead._id}>
                                        <td>{lead.name}</td>
                                        <td>{lead.email}</td>
                                        <td>
                                            <span className={`source-badge source-${lead.source}`}>
                                                {lead.source}
                                            </span>
                                        </td>
                                        <td>
                                            <span className={`status-badge status-${lead.status}`}>
                                                {lead.status}
                                            </span>
                                        </td>
                                        <td>{new Date(lead.createdAt).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No leads yet</p>
                    )}
                </div>
            </div>

            <div className="dashboard-section">
                <h2>Quick Actions</h2>
                <div className="quick-actions">
                    <button className="action-btn">
                        <FaBlog /> Create Blog Post
                    </button>
                    <button className="action-btn">
                        <FaChartLine /> View Analytics
                    </button>
                    <button className="action-btn">
                        <FaEnvelope /> Export Leads
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
