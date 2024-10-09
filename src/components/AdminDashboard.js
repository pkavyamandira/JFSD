// src/components/AdminDashboard.js
import React from 'react';

const AdminDashboard = ({ applications }) => {
  return (
    <div style={styles.container}>
      <h2>Admin Dashboard</h2>
      <p>Here you can manage all student scholarship applications. You can review, approve, or reject applications as needed.</p>
      {applications.map((application) => (
        <div key={application.id} style={styles.applicationCard}>
          <h3>Student: {application.studentName}</h3>
          <p>Scholarship: {application.scholarshipTitle}</p>
          <label htmlFor="status" style={styles.label}>Update Status:</label>
          <select id="status" value={application.status} style={styles.select}>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    margin: '20px auto',
    maxWidth: '800px',
  },
  applicationCard: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.05)',
  },
  label: {
    display: 'block',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  select: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    width: '100%',
    border: '1px solid #ccc',
  }
};

export default AdminDashboard;
