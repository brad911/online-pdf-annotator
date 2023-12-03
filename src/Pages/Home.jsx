import React, { useRef, useState } from 'react'
import Viewer from '../Components/viewer'
import FileUploadComponent from '../Components/fileUploadComponent'
import CustomDrawer from '../Components/customerDrawer/customDrawer';

function Home() {
    const [uploadedFile,setUploadedFile]=useState(null);
    const handleFileUpload = (e) => {
        setUploadedFile(e.target.files[0]);
      };
    return (
        <div style={{display:"flex"}}>
            <CustomDrawer onChange={handleFileUpload}/>
            <Viewer  uploadedFile={uploadedFile}/>
        </div>
    )
}

export default Home
