import React, { Component } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';

class FetchInfo extends Component {
  state = {
    images: [],
    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    const prevImages = prevProps.inputQuery;
    const nextImages = this.props.inputQuery;
    if (prevImages !== nextImages) {
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?q=${nextImages}&page=1&key=18746845-d42972f09728a4362613f1690&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`No such query ${nextImages}. Please try again`),
          );
        })
        .then(images => this.setState({ images, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  render() {
    const { images, error, status } = this.state;

    if (status === 'idle') {
      return <div>Input your query</div>;
    }

    if (status === 'pending') {
      return <div>Loading</div>;
    }

    if (status === 'rejected') {
      return <h2>{error.message}</h2>;
    }

    if (status === 'resolved') {
      return <ImageGallery images={images.hits} />;
    }
  }
}

export default FetchInfo;
