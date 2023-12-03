import React from 'react';
import { FaFileExcel, FaFileWord, FaFileAlt, FaFileUpload } from "react-icons/fa";
import { AiFillFilePpt } from "react-icons/ai";
import "./customDrawer.style.css"

function CustomDrawer(props) {


  const handleUploadClick = () => {
    document.getElementById('fileUpload').click();
  };

  return (
    <div className='container'>
      <div className='container-child'>
        <FaFileWord className='icon' style={{ color: "#1E7AAA" }} />
        <p className='container-child-text'>Document</p>
      </div>
      <div className='container-child'>
        <FaFileExcel className='icon' style={{ color: "#6AAA1E" }} />
        <p className='container-child-text'>SpreadSheet</p>
      </div>
      <div className='container-child'>
        <AiFillFilePpt className='icon' style={{ color: "#F36700" }} />
        <p className='container-child-text'>Presentation</p>
      </div>
      <div className='container-child'>
        <FaFileAlt className='icon' style={{ color: "#27ABA3" }} />
        <p className='container-child-text'>Form template</p>
      </div>

      {/* Divider */}
      <div className='divider'></div>

      {/* Upload File */}
      <div style={{cursor:"pointer"}} className='container-child' onClick={handleUploadClick}>
        <input
          style={{ display: "none" }}
          type="file"
          id="fileUpload"
          name="fileUpload"
          accept=".pdf"
          {...props}
        />
        <FaFileUpload className='icon' style={{ color: "#D0D5DA"}} />
        <p>Upload file</p>
      </div>

      {/* Divider */}
      <div className='divider'></div>
    </div>
  );
}

export default CustomDrawer;