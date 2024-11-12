import React from 'react'
import MainLayout from '@/components/layouts/MainLayout';

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  margin: '20px 0',
  fontSize: '3.5rem',
  fontFamily: 'Times New Roman',
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
  padding: '10px', // Adds padding around the text
  borderRadius: '5px', // Rounds the corners slightly
};

const containerStyle: React.CSSProperties = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '0 20px',
};

const introStyle: React.CSSProperties = {
  marginBottom: '30px',
  fontSize: '1.1rem',
  fontFamily: 'Brandon Grotesque',
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background for readability
  padding: '15px', // Adds padding around the paragraph
  borderRadius: '5px', // Rounds the corners slightly
};

const sectionStyle: React.CSSProperties = {
  marginBottom: '40px',
  padding: '20px',
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
};

const sectionHeaderStyle: React.CSSProperties = {
  marginBottom: '10px',
  fontSize: '1.8rem',
  color: '#0070f3',
};

const contentStyle: React.CSSProperties = {
  position: 'relative',
  zIndex: 10, 
  textAlign: 'center',
  padding: '20px', 
  fontFamily: 'Times New Roman, Brandon Grotesque, sans-serif',
};

const Page: React.FC = () => {
  return (
    <MainLayout>
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/19320080/pexels-photo-19320080/free-photo-of-asian-people-in-traditional-clothing-posing-against-a-backdrop-of-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div style={contentStyle}>
          <h1 style={headerStyle}>About Us</h1>
          <div style={containerStyle}>
            <p style={introStyle}>
              Welcome to CulturaConnect!<br /><br />
              At CulturaConnect, we believe that our diversity is our greatest strength. We are a platform where people from every corner of the globe can come together, sharing and exploring the beauty of different cultures, languages, and customs. Our mission is simple but powerful: to bridge gaps, build friendships, and inspire understanding by creating a safe, inclusive space where everyone feels represented.

In a world that sometimes feels divided, CulturaConnect stands as a beacon of unity. Here, we celebrate both the unique and universal aspects of human experience—traditions passed down through generations, the rich tapestry of languages, and the creative expression of every culture.

Whether you’re here to learn about new traditions, connect with people from different backgrounds, or simply broaden your horizons, CulturaConnect is your home. We invite you to participate, share, and contribute to the beautiful mosaic that is our world. Let’s come together and make a global impact, one story at a time.
              
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
