import React, { useEffect } from 'react';

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log('ConvertJS is called');
  }, [language, text]);

  return <div>Convert</div>;
};

export default Convert;
