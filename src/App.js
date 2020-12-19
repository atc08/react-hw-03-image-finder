// import { render } from '@testing-library/react';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Button from './components/Button';
import FetchInfo from './components/FetchInfo';
import Loader from './components/Loader';
import Modal from './components/Modal';
import Searchbar from './components/Searchbar';

// import PropTypes from 'prop-types';

class App extends Component {
  state = {
    inputQuery: '',
  };
  handleFormSubmit = inputQuery => {
    this.setState({ inputQuery });
  };

  render() {
    return (
      <div className="App">
        <Searchbar className="Searchbar" onSubmit={this.handleFormSubmit} />
        <FetchInfo inputQuery={this.state.inputQuery} />
        {/* <ImageGallery /> */}
        {/* <ImageGalleryItem /> */}
        <Loader />
        <Button />
        <Modal />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;

// state = {
//   images: null,
//   loadind: false,
//   // id: '',
//   // webformatURL: '',
//   // largeImageURL: '',
// };
// // const apiKey = '18746845-d42972f09728a4362613f1690';
// componentDidMount() {
//   this.setState({ loading: true });
//   fetch(
//     'https://pixabay.com/api/?q=car&page=1&key=18746845-d42972f09728a4362613f1690&image_type=photo&orientation=horizontal&per_page=12',
//   )
//     .then(res => res.json())
//     .then(images => this.setState({ images }))
//     .finally(() => this.setState({ loading: false }));
// }
