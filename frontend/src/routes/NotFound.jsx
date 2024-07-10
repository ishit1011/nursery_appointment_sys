import React from 'react';

function NotFound() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>404 - Page Not Found</h2>
      <p style={styles.paragraph}>The page you are looking for does not exist.</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f9fa', // Optional: change the background color as needed
  },
  heading: {
    fontSize: '2em',
    marginBottom: '0.5em',
  },
  paragraph: {
    fontSize: '1.2em',
  },
};

export default NotFound;
