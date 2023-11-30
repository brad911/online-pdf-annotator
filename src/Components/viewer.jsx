import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/pdfjs-express';

function Viewer({ uploadedFile }) {
  const viewer = useRef(null);

  useEffect(() => {
    let instance = null;
    const initializeViewer = async () => {
      try {
        if (!instance && uploadedFile != null) {
          console.log(uploadedFile,"mjhe nahi chalna shuru m")
          let obj=document.getElementById("file_upload")
          instance = await WebViewer({
            enableMeasurement: true,
            path: '/pdfjsexpress',
            initialDoc: "/files/sample.pdf", // Directly use the uploaded file from state
            extension: 'pdf', // Specify the file extension here if needed
            licenseKey: 'adjMD6yMNCUJMX75Uyda',
          }, viewer.current).then(instance=>{
            //Enable Measurments
            instance.UI.enableFeatures([instance.UI.Feature.Measurement]);
            
            //remove annotation
            const { documentViewer, annotationManager } = instance.Core;
            console.log(annotationManager,"<=== annotation manager");
            documentViewer.addEventListener('annotationsLoaded', () => {
              const annots = annotationManager.getAnnotationsList();
              console.log(annots,"<=== annots")
              // remove annotations
              annotationManager.deleteAnnotations(annots);
            });
            //removed annotation block
            
            
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