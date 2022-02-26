import React, { useState } from 'react';
import Field from './components/field';
import Languages from './components/languages';
import Translate from './components/translate';

import './style.css';

export default function App() {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('ru');

  return (
    <div className='container'>
      <Field label='Enter english' onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}
