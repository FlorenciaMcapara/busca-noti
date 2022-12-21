import React, { useState } from 'react';
import { obtenerNoticias } from './servicios/noticias';
import NewsList from './components/NewsList';
import ErrorMessage from './components/ErrorMessage';
import EmptyResultsMessage from './components/EmptyResultsMessage';
import Spinner from './components/Spinner';
import Header from './components/Header';
import Footer from './components/Footer';

import './styles/Main.css';

function Main() {
  const [searchQuery, setSearchQuery] = useState('');
  const [news, setNews] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setHasSearched(true);

    obtenerNoticias(searchQuery, '', '', '')
      .then((response) => {
        setIsLoading(false);
        setNews(response);
        setTotalResults(response.length);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  const handleSearchInputChange = (event) => {
    const searchQuery = event.target.value;
    setSearchQuery(searchQuery);
  };

  const handleSearchInputKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch(event);
    }
  };

  const handlePagination = (pageNumber) => {
    setPageNumber(pageNumber);
    setIsLoading(true);
    setError(null);

    obtenerNoticias(searchQuery, '', '', '', pageNumber)
      .then((response) => {
        setIsLoading(false);
        setNews(response);
        setTotalResults(response.length);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };
  
  return (
    <div>
      <Header />
      
      <div className="d-flex justify-content-center mt-5">
        <form onSubmit={handleSearch} className="w-50">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            onKeyPress={handleSearchInputKeyPress}
            className="form-control"
            placeholder='Ingresa un tema de tu interés 🧐'
          />
          <button
            type="submit"
            disabled={searchQuery.length < 3}
            className="btn btn-primary w-20"
          >
            Buscar
          </button>
        </form>
      </div>
      {isLoading && <Spinner />}
      {error && <ErrorMessage error={error} />}
      {!isLoading && !error && hasSearched && news.length === 0 && (
        <EmptyResultsMessage />
        
      )}
      <div className='pagination'>
      {!isLoading && !error && news.length > 0 && (
        <NewsList
          news={news}
          totalResults={totalResults}
          pageNumber={pageNumber}
          onPagination={handlePagination}
        />
      )}
          </div>
     
      <Footer />
    </div>
  );
  
  
  
  
}

      export default Main;
