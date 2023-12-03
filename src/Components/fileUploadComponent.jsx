import React from 'react'

function FileUploadComponent(props) {
  return (
    <input   {...props} type="file" id="file_upload" name="file_upload" accept=".pdf"></input>
  )
}

export default FileUploadComponent