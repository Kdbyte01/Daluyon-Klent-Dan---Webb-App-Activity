import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';

const Page: React.FC = () => {
   return (
    <MainLayout>
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/6673837/pexels-photo-6673837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div style={contentStyle}>
          <h1 style={headerStyle}>Get In Touch</h1>
          <p style={introTextStyle}>
          We’d love to hear from you! Whether you have questions, want to share your story, or are looking to collaborate, CulturaConnect is here to connect with you. Please feel free to reach out through any of the options below:
          </p>
          <div style={contactInfoStyle}>
            <h2 style={subHeaderStyle}>Contact Information</h2>
            <ul style={infoListStyle}>
              <li><strong>Address:</strong> Prk. Sandayong, Brgy. Santo Nino, Pagadian City, 7016, Zamboanga Del Sur</li>
              <li><strong>Phone:</strong> (+63) 9704453302</li>
              <li><strong>Email:</strong> culturaconnect@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  fontSize: '3.5rem',
  fontWeight: 'bold',
  color: '#fff',
  marginBottom: '20px',
};

const introTextStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  color: '#fff',
  marginBottom: '30px',
  maxWidth: '600px',
  textAlign: 'center',
  margin: '0 auto',
  fontFamily: 'Helvetica',
};

const contactInfoStyle: React.CSSProperties = {
  marginTop: '40px',
  color: '#fff',
  textAlign: 'center',
};

const subHeaderStyle: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#fff',
  marginBottom: '20px',
  fontFamily: 'Brandon Grotesque',
};

const infoListStyle: React.CSSProperties = {
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  color: '#fff',
  fontFamily: 'Helvetica',
};

const contentStyle: React.CSSProperties = {
  position: 'relative',
  zIndex: 10,
  textAlign: 'center',
  padding: '40px 20px',
  maxWidth: '900px',
  color: '#fff',
  fontFamily: 'Brandon Grotesque',
};

export default Page;