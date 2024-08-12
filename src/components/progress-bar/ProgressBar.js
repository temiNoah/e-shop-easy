import React, { useEffect } from 'react';
import useFirebaseStorage from '../../hooks/useStorage';
import { motion } from 'framer-motion';
import './style.scss'

const ProgressBar = ({ file, setFile, setUploadImageUrl, dealerId }) => {
  const { progress, url, error } = useFirebaseStorage(file, dealerId);


  useEffect(() => {

    if (url) {
      setFile(file);
      setUploadImageUrl(prev => [...prev, url]);
      // setUploadImageUrl(prev => { prev.push(url); return prev });
    }
    // console.log("url : " + url + "  progress: " + progress)

  }, [url, setFile]);

  return (
    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
      whileHover={{ scaleY: 1.2 }}
      whileTap={{ scaleY: 2 }}
    ></motion.div>
  )
    ;
}

export default ProgressBar;