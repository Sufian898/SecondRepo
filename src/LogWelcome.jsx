// src/LogWelcome.jsx
import React, { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from './firebase';

const LogWelcome = () => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [downloadURL, setDownloadURL] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return alert("Please select a file first");

    const storageRef = ref(storage, `cvs/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setUploadProgress(progress);
      },
      (error) => {
        console.error("Upload error:", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setDownloadURL(url);
        });
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-6 space-y-4">
      <h1 className="text-3xl font-bold text-green-800">Welcome Back!</h1>
      
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        className="file-input file-input-bordered w-full max-w-xs"
      />

      <button
        onClick={handleUpload}
        className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded"
      >
        Upload CV
      </button>

      {uploadProgress > 0 && uploadProgress < 100 && (
        <p className="text-green-700">Uploading: {uploadProgress}%</p>
      )}

      {downloadURL && (
        <p className="text-green-800">
          CV uploaded successfully!{' '}
          <a href={downloadURL} target="_blank" rel="noopener noreferrer" className="underline">
            View CV
          </a>
        </p>
      )}
    </div>
  );
};

export default LogWelcome;
