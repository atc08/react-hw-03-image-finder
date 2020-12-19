import React from 'react';
import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ url, alt }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={url}
        alt={alt}
        width="300"
        className={s.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
