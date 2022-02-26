import React from "react";
import Field from './components/field';
import Languages from './components/languages'
import Translate from './components/translate'

import './style.css'

export default function App() {
  return (
    <div className="container">
      <Field />
      <Languages />
      <Translate />
    </div>
  );
}
