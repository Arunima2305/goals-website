import React from 'react';

const Contact = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: '0', padding: '0', backgroundColor: 'wheat' }}>
            <main style={{ padding: '20px' }}>
                <section style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', maxWidth: '600px', margin: 'auto' }}>
                    <h1 style={{ fontSize: '2em', marginBottom: '10px' }}>Contact Us</h1>
                    <p style={{ fontSize: '1em', lineHeight: '1.6', marginBottom: '20px' }}>
                        We'd love to hear from you! Whether you have a question about features,need a demo, or anything else, our team is ready to answer all your questions.
                    </p>
                    
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label htmlFor="name" style={{ marginBottom: '5px', fontWeight: 'bold' }}>Name:</label>
                            <input type="text" id="name" name="name" style={{ padding: '10px', fontSize: '1em', borderRadius: '4px', border: '1px solid #ccc' }} />
                        </div>
                        
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label htmlFor="email" style={{ marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
                            <input type="email" id="email" name="email" style={{ padding: '10px', fontSize: '1em', borderRadius: '4px', border: '1px solid #ccc' }} />
                        </div>
                        
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label htmlFor="message" style={{ marginBottom: '5px', fontWeight: 'bold' }}>Message:</label>
                            <textarea id="message" name="message" rows="5" style={{ padding: '10px', fontSize: '1em', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
                        </div>
                        
                        <button type="submit" style={{ padding: '10px 20px', fontSize: '1em', color: '#fff', backgroundColor: '#333', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>
                            Send Message
                        </button>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default Contact;
