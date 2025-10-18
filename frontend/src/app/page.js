'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [message, setMessage] = useState('Loading...');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch message from our backend API
    fetch('http://localhost:3001/api/hello')
      .then(response => response.json())
      .then(data => {
        setMessage(data.message);
      })
      .catch(err => {
        console.error('Error fetching message:', err);
        setError('Could not connect to backend');
      });
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '500px'
      }}>
        <h1 style={{
          color: '#333',
          marginBottom: '1rem',
          fontSize: '2rem'
        }}>
          🐳 Docker Tutorial App
        </h1>
        
        <div style={{
          padding: '1rem',
          backgroundColor: '#e8f5e8',
          borderRadius: '5px',
          marginBottom: '1rem'
        }}>
          <h2 style={{
            color: '#2d5a2d',
            margin: '0 0 0.5rem 0',
            fontSize: '1.5rem'
          }}>
            Message from Backend:
          </h2>
          
          {error ? (
            <p style={{ color: 'red', fontSize: '1.1rem' }}>{error}</p>
          ) : (
            <p style={{
              color: '#2d5a2d',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              margin: 0
            }}>
              {message}
            </p>
          )}
        </div>
        
        <p style={{
          color: '#666',
          fontSize: '0.9rem',
          margin: 0
        }}>
          Frontend (Next.js) → Backend (Express.js) → Docker Containers
        </p>
      </div>
    </div>
  );
}
