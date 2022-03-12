import React, { useEffect, useRef, useState } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef()

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div onClick={() => onSelectedChange(option)} key={option.value} className='item'>
        {option.label}
      </div>
    );
  });

  const handleCloseOnClickOutside = (event) => {
    if (!dropdownRef.current.contains(event.target)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', handleCloseOnClickOutside);

    return () => {
      document.body.removeEventListener('click', handleCloseOnClickOutside);
    }
  },[])

  return (
    <div ref={dropdownRef} className='ui form'>
      <div className='field'>
        <label className='label'>Выберите цвет</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
