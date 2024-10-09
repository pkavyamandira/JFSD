// src/components/ScholarshipList.js
import React from 'react';

const ScholarshipList = ({ scholarships }) => {
  return (
    <div style={styles.container}>
      <h2>Available Scholarships</h2>
      <p>Below is the list of scholarships you can apply for. Click "Apply Now" to start your application.</p>
      {scholarships.map((scholarship) => (
        <div key={scholarship.id} style={styles.scholarshipCard}>
          <h3>{scholarship.title}</h3>
          <p>{scholarship.description}</p>
          <button style={styles.button}>Apply Now</button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f1f1f1',
    margin: '20px auto',
    maxWidth: '800px',
  },
  scholarshipCard: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.05)',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }
};

export default ScholarshipList;
