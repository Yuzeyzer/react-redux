import React from 'react';

const Link = ({ children, href, ...props }) => {
  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) return;

    event.preventDefault();

    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default Link;
