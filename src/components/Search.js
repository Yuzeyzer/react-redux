import React from 'react';

const Search = () => {
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
