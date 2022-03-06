import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    id: 1,
    title: 'Я люблю React',
    content: 'Моя любовь к React безгранична и бездонна',
  },
  {
    id: 2,
    title: 'Чтобы сегодня приготовить',
    content: 'Каждый вечер канибалиста - Сергея беспокоят томные мысли о еде',
  },
];

export default function App() {
  return (
    <div className=''>
      {/* <Accordion items={items}/> */}
      <Search />
    </div>
  );
}
