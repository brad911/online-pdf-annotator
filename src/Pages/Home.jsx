import React, { useRef, useState } from 'react'
import Viewer from '../Components/viewer'
import FileUploadComponent from '../Components/fileUploadComponent'

function Home() {
    const [uploadedFile,setUploadedFile]=useState(null);
    const handleFileUpload = (e) => {
        setUploadedFile(e.target.files[0]);
      };
    return (
        <div onClick={()=>{console.log(uploadedFile,"<===== wowowow")}}>
            <FileUploadComponent  onChange={handleFileUpload}/>
            <Viewer  uploadedFile={uploadedFile}/>
        </div>
    )
}

export default Home
