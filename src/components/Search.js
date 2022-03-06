import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleChangeInput = (event) => {
    setTerm(event.target.value);
  };

  const handleSearch = async () => {
    if (term) {
      const { data } = await axios.get('https://ru.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });

      setResults(data.query.search);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className='item'>
        <div className='content'>
          <div className='header'>{result.title}</div>
					<span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Введите текст для поиска</label>
          <input onChange={handleChangeInput} type='text' className='input' />
        </div>
      </div>
      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
};

export default Search;
