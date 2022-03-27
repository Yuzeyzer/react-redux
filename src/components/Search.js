import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Search = () => {
  const [term, setTerm] = useState('life');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  const handleChangeInput = (event) => {
    setTerm(event.target.value);
  };

  const handleSearch = async () => {
    const { data } = await axios.get('https://ru.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        list: 'search',
        origin: '*',
        format: 'json',
        srsearch: debouncedTerm,
      },
    });

    setResults(data.query.search);
  };

  useEffect(() => {
    if (term) handleSearch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedTerm]);

  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedTerm(term), 1000);

    return () => {
			clearTimeout(timerId)
		};
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className='item'>
        <div className='right floated content'>
          <a href={`https://ru.wikipedia.org/?curid=${result.pageid}`} className='ui button'>
            Go
          </a>
        </div>
        <div className='content'>
          <div className='header'>{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div className="ui container">
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
