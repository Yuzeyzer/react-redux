import React from 'react';
import CommentDetail from './components/CommentDetail';
import faker from '@faker-js/faker';

export default function App() {
  return (
    <div className='ui container comments'>
      <CommentDetail
        author='Сергей'
        timeAgo='20 часов назад'
        content='Отличный пост, много полезного!'
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author='Марлен'
        timeAgo='17 часов назад'
        content='Да нее, одна вода да и только'
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author='Кайратик'
        timeAgo='7 часов назад'
        content='Да норм, че наехали на девушку?'
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author='Ислам'
        timeAgo='4 часов назад'
        content='Это парень...'
        avatar={faker.image.avatar()}
      />
    </div>
  );
}
