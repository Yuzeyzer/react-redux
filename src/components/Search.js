import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Search = () => {
	const [term,setTerm] = useState('programming');

	const handleSearch = async () => {
		const response = await axios.get('https://en.wikipedia.org/w/api.php',{
			params: {
				action: 'query',
				list: 'search',
				origin: '*',
				format: 'json',
				srsearch: term
			}
		})
		console.log(response)
	};

	useEffect(() => {
		handleSearch()
	},[term])

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Введите текст для поиска</label>
          <input type='text' className='input' />
        </div>
      </div>
    </div>
  );
};

export default Search;
