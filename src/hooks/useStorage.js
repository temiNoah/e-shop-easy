import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';
import { ref, uploadBytes, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import uuid from 'react-uuid';

const useFirebaseStorage = (file, userId) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  const extension = "." + file.name.split('.').pop()
  const newFileName = uuid() + "-" + Date.now() + extension;

  useEffect(() => {
    // references
    const storageRef = ref(projectStorage, `/images/${userId}/${newFileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
      (snapshot) => {
        const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        setProgress(percent)
      },
      (err) => {
        setError(err);
        console.log(err)
      },
      () => {
        getDownloadURL(storageRef).then(url => {
          setUrl(url)
        }).catch(err => {
          setError(err)
          console.log(err.message, "error getting the image url")
        })
      }
    );

    // uploadBytes(storageRef, file).then(
    //   () => {
    //     getDownloadURL(storageRef).then(url => {
    //       setUrl(url)
    //       let percentage = 90//(snap.bytesTransferred / snap.totalBytes) * 100;
    //       setProgress(percentage);
    //     }).catch(err => {
    //        setError(err)
    //       console.log(err.message, "error getting the image url")
    //     })
    //   }
    // ).catch(err => {
    //   setError(err)
    //   console.log(err.message, "error getting the image url")
    // })




  }, [file]);

  return { progress, url, error };
}

export default useFirebaseStorage;