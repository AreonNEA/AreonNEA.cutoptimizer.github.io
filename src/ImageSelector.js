import React from 'react';
import styles from './styles/ImageSelector.module.css';

const images = [
    '/images/image1.png',  
    '/images/image2.png' 
  ];

function ImageSelector({ selectedImage, setSelectedImage }) {
  return (
    <div className={styles.imageSelector}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          onClick={() => setSelectedImage(image)} 
          className={selectedImage === image ? styles.selected : ''}
        />
      ))}
    </div>
  );
}

export default ImageSelector;
