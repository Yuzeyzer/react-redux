import React from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
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

const options = [
  {
    label: 'Красный цвет',
    value: 'red'
  },
  {
    label: 'Зеленный цвет',
    value: 'green'
  },
  {
    label: 'Оттенок синего',
    value: 'blue'
  }
]

export default function App() {
  return (
    <div className='ui container'>
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
      <Dropdown options={options}/>
    </div>
  );
}
