import React from 'react';
import { useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';


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
	{
    label: 'Russian',
    value: 'ru',
  }
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
      <hr />
			<h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
