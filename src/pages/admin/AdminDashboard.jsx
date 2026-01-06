import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGlobe, FaUniversity, FaBlog, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';
import { settingsAPI } from '../../services/api';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/admin');
      return;
    }

    settingsAPI.getDashboardStats()
      .then(response => {
        setStats(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch stats:', error);
        setLoading(false);
      });
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  if (loading) return <div className="admin-loading">Loading...</div>;

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
          <p>{user?.name}</p>
        </div>
        <nav className="sidebar-nav">
          <Link to="/admin/dashboard" className="nav-item active">
            Dashboard
          </Link>
          <div className="nav-section">Management</div>
          <Link to="/admin/countries" className="nav-item">
            <FaGlobe /> Countries
          </Link>
          <Link to="/admin/universities" className="nav-item">
            <FaUniversity /> Universities
          </Link>
          <Link to="/admin/blogs" className="nav-item">
            <FaBlog /> Blogs
          </Link>
          <Link to="/admin/enquiries" className="nav-item">
            <FaEnvelope /> Enquiries
          </Link>
          <div className="nav-section">Settings</div>
          <Link to="/admin/settings" className="nav-item">
            Site Settings
          </Link>
          <button onClick={handleLogout} className="nav-item logout-btn">
            <FaSignOutAlt /> Logout
          </button>
        </nav>
      </aside>

      <main className="admin-content">
        <div className="admin-header">
          <h1>Dashboard Overview</h1>
          <Link to="/" className="btn btn-secondary">View Site</Link>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <FaGlobe className="stat-icon" />
            <div>
              <h3>{stats?.stats?.countries || 0}</h3>
              <p>Active Countries</p>
            </div>
          </div>
          <div className="stat-card">
            <FaUniversity className="stat-icon" />
            <div>
              <h3>{stats?.stats?.universities || 0}</h3>
              <p>Universities</p>
            </div>
          </div>
          <div className="stat-card">
            <FaBlog className="stat-icon" />
            <div>
              <h3>{stats?.stats?.blogs || 0}</h3>
              <p>Published Blogs</p>
            </div>
          </div>
          <div className="stat-card">
            <FaEnvelope className="stat-icon" />
            <div>
              <h3>{stats?.stats?.enquiries || 0}</h3>
              <p>Total Enquiries</p>
              {stats?.stats?.newEnquiries > 0 && (
                <span className="badge">{stats.stats.newEnquiries} new</span>
              )}
            </div>
          </div>
        </div>

        <div className="recent-enquiries">
          <h2>Recent Enquiries</h2>
          {stats?.recentEnquiries?.length > 0 ? (
            <div className="enquiries-table">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.recentEnquiries.map(enquiry => (
                    <tr key={enquiry.id}>
                      <td>{enquiry.name}</td>
                      <td>{enquiry.email}</td>
                      <td>{enquiry.country_name || 'N/A'}</td>
                      <td>
                        <span className={`status-badge ${enquiry.status}`}>
                          {enquiry.status}
                        </span>
                      </td>
                      <td>{new Date(enquiry.created_at).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No enquiries yet.</p>
          )}
          <Link to="/admin/enquiries" className="btn btn-outline">View All Enquiries</Link>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
