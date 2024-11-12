import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1045298/pexels-photo-1045298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div style={contentStyle}>
          <h1 style={headerStyle}>CulturaConnect</h1>
          <div style={containerStyle}>
            <p style={introStyle}>
            CulturaConnect is a vibrant online community dedicated to fostering unity and understanding among diverse cultures and tribes worldwide. With a focus on inclusivity, we aim to create a welcoming space for people from all walks of life to share their stories, traditions, and values, celebrating our shared humanity.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

const headerStyle = {
  textAlign: 'center' as 'center',
  margin: '20px 0',
  fontSize: '3rem',
  color: '#fff',
};

const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '0 20px',
};

const introStyle = {
  marginBottom: '30px',
  fontSize: '1.2rem',
  color: '#fff',
};

const contentStyle: React.CSSProperties = {
  position: "relative",
  zIndex: 10,
  textAlign: 'center',
  padding: '20px',
  fontFamily: 'Times New Roman, Brandon Grotesque, sans-serif',
};


export default Home;