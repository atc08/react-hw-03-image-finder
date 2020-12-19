import React, { Component } from 'react';
import s from './Searchbar.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Searchbar extends Component {
  state = {
    inputQuery: '',
  };

  handleInputChange = e => {
    this.setState({ inputQuery: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.inputQuery.trim() === '') {
      toast.warn('Enter your query');
      return;
    }

    this.props.onSubmit(this.state.inputQuery);
    this.setState({ inputQuery: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            name="inputQuery"
            value={this.state.inputQuery}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
