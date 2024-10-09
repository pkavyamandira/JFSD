// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import ScholarshipList from './components/ScholarshipList';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [role, setRole] = useState('student'); // Toggle between 'student' and 'admin'

  const scholarships = [
    { id: 1, title: 'Scholarship A', description: 'Scholarship A offers full funding for undergraduate studies.' },
    { id: 2, title: 'Scholarship B', description: 'Scholarship B provides partial funding for post-graduate programs.' },
  ];

  const applications = [
    { id: 1, studentName: 'Ram', scholarshipTitle: 'Scholarship A', status: 'pending' },
    { id: 2, studentName: 'Seetha', scholarshipTitle: 'Scholarship B', status: 'approved' },
  ];

  return (
    <div style={styles.appContainer}>
      <h1 style={styles.heading}>Scholarship Tracker Platform</h1>

      <div style={styles.roleSelector}>
        <button style={styles.roleButton} onClick={() => setRole('student')}>Student Page</button>
        <button style={styles.roleButton} onClick={() => setRole('admin')}>Admin Page</button>
      </div>

      {role === 'student' ? (
        <div>
          <h2 style={styles.subHeading}>Welcome, Student</h2>
          <Login role="student" />
          <ScholarshipList scholarships={scholarships} />
        </div>
      ) : (
        <div>
          <h2 style={styles.subHeading}>Welcome, Admin</h2>
          <Login role="admin" />
          <AdminDashboard applications={applications} />
        </div>
      )}
    </div>
  );
}

const styles = {
  appContainer: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5em',
    color: '#007bff',
    marginBottom: '20px',
  },
  subHeading: {
    fontSize: '1.8em',
    color: '#333',
  },
  roleSelector: {
    marginBottom: '30px',
  },
  roleButton: {
    padding: '10px 20px',
    margin: '0 10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default App;
