import React from 'react';

const About = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: '0', padding: '0', backgroundColor: 'wheat' }}>
            
            <main style={{ padding: '20px' }}>
                <section style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <h1 style={{ fontSize: '2em', marginBottom: '10px' }}>About Task Trek</h1>
                    <p style={{ fontSize: '1em', lineHeight: '1.6', marginBottom: '20px' }}>
                        Welcome to Task Trek, your ultimate tool for managing tasks efficiently. Our platform is designed to help you keep track of your daily activities, so you can stay organized and productive.
                    </p>

                    <h2 style={{ fontSize: '1.5em', marginBottom: '10px' }}>Our Mission</h2>
                    <p style={{ fontSize: '1em', lineHeight: '1.6', marginBottom: '20px' }}>
                        Our mission is to simplify task management for everyone. Whether you're a busy professional, a student, or just someone looking to stay on top of your day, Task Trek is here to help.
                    </p>

                    <h2 style={{ fontSize: '1.5em', marginBottom: '10px' }}>Features</h2>
                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                        <li style={{ marginBottom: '10px' }}>Easy-to-use task management</li>
                        <li style={{ marginBottom: '10px' }}>Customizable task categories</li>
                        <li style={{ marginBottom: '10px' }}>Deadline reminders</li>
                        <li style={{ marginBottom: '10px' }}>Progress tracking</li>
                        <li style={{ marginBottom: '10px' }}>Collaborative task sharing</li>
                    </ul>

                    <h2 style={{ fontSize: '1.5em', marginBottom: '10px' }}>Why Choose Us?</h2>
                    <p style={{ fontSize: '1em', lineHeight: '1.6' }}>
                        We believe that staying organized shouldn't be complicated. Task Trek offers a simple yet powerful interface that lets you focus on what matters most: getting things done.
                    </p>
                </section>
            </main>

            
        </div>
    );
};

export default About;
