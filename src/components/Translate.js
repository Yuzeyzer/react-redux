import React from 'react';
import { useState } from 'react';
import Dropdown from './Dropdown';

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM 
const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Type a text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} type='text' />
        </div>
      </div>
      <Dropdown
        label='Select a Language'
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
    </div>
  );
};

export default Translate;
