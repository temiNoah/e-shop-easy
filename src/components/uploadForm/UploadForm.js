import React, { useState, useEffect } from 'react';
import { Button, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ProgressBar from '../progress-bar/ProgressBar';
import CustomTooltip from '../tooltip/Tooltip';
import './style.scss'

const UploadForm = ({ file, setUploadImageUrl, setFile, uploadImgError, setUploadImgError, dealerId }) => {
  // const [file, setFile] = useState(null);
  // const [error, setError] = useState(null);
  // const [url, setUrl] = useState(null);
  const [startUpload, setStartUpload] = useState(false)
  const [modal, setModal] = useState(false)
  const [description, setDescription] = useState("")
  const [filesSelected, setFilesSelected] = useState([])

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    setStartUpload(false)

    if (selected && types.includes(selected.type)) {

      setFile(selected);
      setUploadImgError('');
      setModal(true)
      setFilesSelected(prev => [...prev, selected])
    }
    else {
      setFile(null);
      setUploadImgError('Please select an image file (png or jpg)');
      setModal(false)
      console.log("file format not allowed ")
    }
  };

  const handleImageDesc = () => {
    // alert(description)
    setModal(false)
    setStartUpload(true)
  }

  const toggle = () => {
    setModal(prev => !prev);
  }

  useEffect(() => {
    if (setUploadImageUrl.length == 0)
      setFilesSelected(null)
  }, [setUploadImageUrl])


  return (
    <>
      <label htmlFor="file" >
        <i class="ri-folder-upload-line icon" id="uploadFolder"></i>
      </label>
      <CustomTooltip targetElementId="uploadFolder" text={"upload image"} position="right" />

      <input
        type="file"
        id="file"
        style={{ display: 'none' }}
        onChange={handleChange}
      />

      <div className="output">
        {uploadImgError && <div className="error">{uploadImgError}</div>}
        {
          file &&
          <div style={{ overflowX: "scroll", fontSize: "12px", fontWeight: "500", fontFamily: "sans-serif" }} >
            Files:{filesSelected.length != 0 && filesSelected.map(f => { return <Label style={{ fontSize: "10px", fontWeight: "100", fontFamily: "sans-serif" }}>{f.name + " ,      "}</Label> })}
          </div>
        }
        {startUpload &&
          <ProgressBar
            file={file}
            setFile={setFile}
            setUploadImageUrl={setUploadImageUrl}
            imgDesc={description}
            dealerId={dealerId}
          />}
      </div>


      <Modal isOpen={modal} toggle={toggle} className="uploadForm-imageDesModal">
        <ModalHeader> Image Description</ModalHeader>
        <ModalBody className="uploadForm-imageDesModal">
          {/* <Label>Image description:</Label> */}
          <Input type="text" name="imageDesc" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Interior/Exterior view" />
        </ModalBody>
        <ModalFooter style={{ justifyContent: "center" }}>
          <Button onClick={handleImageDesc} variant="success" className="button btn btn-primary" style={{ width: "80px", height: "50px" }}>ok</Button>
        </ModalFooter>
      </Modal>


    </>
  );
}

export default UploadForm;