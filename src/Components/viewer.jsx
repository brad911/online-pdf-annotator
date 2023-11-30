import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/pdfjs-express';

function Viewer({ uploadedFile }) {
  const viewer = useRef(null);

  useEffect(() => {
    let instance = null;
    const initializeViewer = async () => {
      try {
        if (!instance && uploadedFile != null) {
          let obj=document.getElementById("file_upload")
          console.log(obj,"<== obj")
          instance = await WebViewer({
            enableMeasurement: true,
            path: '/pdfjsexpress',
            initialDoc: "/files/sample.pdf", // Directly use the uploaded file from state
            extension: 'pdf', // Specify the file extension here if needed
            licenseKey: 'adjMD6yMNCUJMX75Uyda',
          }, viewer.current).then(instance=>{
            instance.UI.enableFeatures([instance.UI.Feature.Measurement]);
            instance.UI.disableElements(['toolbarGroup-Annotate']);
            instance.UI.disableElements(['toolbarGroup-Shapes']);
            instance.UI.disableElements(['toolbarGroup-Edit']);
            instance.UI.disableElements(['toolbarGroup-FillAndSign']);
            instance.UI.disableElements(['toolbarGroup-Insert']); // hides DOM element + disables shortcut
            

            obj.addEventListener('change', () => {
              // Get the file from the input
              const file = obj.files[0];
              instance.UI.loadDocument(file, { filename: file.name });
            });
          })
        }
      } catch (error) {
        console.error('Error initializing WebViewer:', error);
      }
    };
    initializeViewer();
  }, [uploadedFile]);

  return (
    <div className='viewer-body' style={{ width: "100%", height: "100vh" }} ref={viewer}></div>
  );
}

export default Viewer;