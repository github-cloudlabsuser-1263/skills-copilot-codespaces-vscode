
// pages/index.js
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Home() {
  const [markdown, setMarkdown] = useState("type markdown here");

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <textarea
        value={markdown}
        onChange={handleChange}
        rows="10"
        cols="50"
        style={{ marginBottom: '20px', padding: '10px', fontSize: '16px' }}
      />
      <div style={{ border: '1px solid #ddd', padding: '20px', width: '80%', backgroundColor: '#f9f9f9' }}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}