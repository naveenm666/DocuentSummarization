// apps/frontend/src/app/upload/page.tsx
"use client";
import { useState } from 'react';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Summary: ${data.summary}`);
      } else {
        alert('File upload failed.');
      }
    }
  };

  return (
    <div>
      <h1>Upload File</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf, .docx" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
