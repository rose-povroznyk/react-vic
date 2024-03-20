import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageWraper.module.sass';

const ImageWrapper = ({ children, width, height }) => {
  const wrapperDims = {
    height,
    width,
  };
  return (
    <div style={wrapperDims} className={styles.imageContainer}>
      {children}
    </div>
  );
};

ImageWrapper.defaultProps = {
  width: '300px',
  height: '250px',
};

ImageWrapper.propTypes = {
  children: PropTypes.element,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ImageWrapper;
