import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          url={image.previewURL}
          alt={image.tags}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
