import React from 'react';

const NotFound = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404</h1>
            <p style={styles.subtitle}>Oops! The page you're looking for doesn't exist.</p>
            <a href="/" style={styles.link}>
                Go Back Home
            </a>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '50px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: '100px',
        margin: '0',
        color: '#dc3545',
    },
    subtitle: {
        fontSize: '24px',
        margin: '10px 0',
        color: '#6c757d',
    },
    link: {
        marginTop: '20px',
        fontSize: '18px',
        textDecoration: 'none',
        color: '#007bff',
        fontWeight: 'bold',
        padding: '10px 20px',
        border: '2px solid #007bff',
        borderRadius: '5px',
    },
};

export default NotFound;
