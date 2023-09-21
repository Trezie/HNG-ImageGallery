import React, { useState } from 'react';

function ImageGalleryUpload() {
  const [files, setFiles] = useState([]);
  const handleDrop = (event) => {
    event.preventDefault();
    const { files } = event.dataTransfer;
    if (files.length > 0) {
      // Convert the FileList object to an array and set it in state
      const fileList = Array.from(files);
      setFiles(fileList);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragStart = (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-content-center file-upload">
        <div>
          <p className="book-upload">Upload a book to start swap</p>
          <p className="save-cost">Save cost of buying new books by book swapping</p>
          <div className="file-upload-area m-10" onDragOver={handleDragOver} onDrop={handleDrop}>
            <div
              className="card-body d-flex align-items-center justify-content-center m-2 scan-div"
              style={{ minHeight: "372px" }}
              draggable="true"
              onDragStart={handleDragStart}
            >
              <div className="file-upload-div">
                <ul>
                  {files.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
                <h5 className="card-title scan-book">Tap here to scan a book</h5>
                <div className="d-flex align-items-center justify-content-center">
                  <h5 className="isbn">ISBN format</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageGalleryUpload
