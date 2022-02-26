import React from 'react';

const ApprovalCard = (props) => {
  const { children } = props;
  return (
    <div className='ui card'>
      <div className='content'>{children}</div>
      <div className='extra content'>
        <div className='ui two buttons'>
          <div className='ui basic green button'>Принять</div>
          <div className='ui basic red button'>Отклонить</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
