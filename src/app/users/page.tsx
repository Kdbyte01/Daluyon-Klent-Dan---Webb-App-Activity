"use server";
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { getUsers } from "@/services/user.service";
import User from "@/types/user";

export default async function Home() {
  const users = await getUsers();
  return (
    <MainLayout>
      <div
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/10664725/pexels-photo-10664725.jpeg?auto=compress&cs=tinysrgb&w=600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingTop: '50px',
          position: 'relative',
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.6)', // White overlay with 60% transparency
            zIndex: 1,
          }}
        ></div>

        <section
          style={{
            zIndex: 2, // Ensures content appears above overlay
            maxWidth: '80%', // Adjusted width for narrower appearance
            backgroundColor: 'rgba(255, 255, 255, 0.85)', // Slightly transparent white background
            borderRadius: '8px',
            padding: '20px',
            margin: '0 auto',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: '24px', color: 'black', marginBottom: '20px' }}>User list</h1>
          <table
            className="text-black border"
            style={{
              width: '100%',
              backgroundColor: 'white',
              borderCollapse: 'collapse',
              margin: '0 auto',
              fontSize: '18px',
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#f0f0f0' }}>
                <th className="text-center px-6 py-4">Id</th>
                <th className="text-center px-6 py-4">Username</th>
                <th className="text-center px-6 py-4">Fullname</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0
                ? users.map((user: User, index: number) => (
                    <tr
                      key={index}
                      style={{
                        backgroundColor: index % 2 === 0 ? 'white' : '#f9f9f9',
                      }}
                    >
                      <td className="text-center px-6 py-4">{user.id}</td>
                      <td className="text-center px-6 py-4">{user.username}</td>
                      <td className="text-center px-6 py-4">{user.fullname}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </section>
      </div>
    </MainLayout>
  );
}
