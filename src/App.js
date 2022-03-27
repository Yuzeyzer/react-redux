import React from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import Route from './components/Route';
import Search from './components/Search';
import Translate from './components/Translate';

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
    value: 'red',
  },
  {
    label: 'Зеленный цвет',
    value: 'green',
  },
  {
    label: 'Оттенок синего',
    value: 'blue',
  },
  {
    label: 'Розовый цвет',
    value: 'pink',
  },
  {
    label: 'Мраморный цвет',
    value: 'mramori',
  },
  {
    label: 'Голубой цвет',
    value: 'lightblue',
  },
];

export default function App() {
  const [selected, setSelected] = React.useState(options[0]);
  return (
    <div className='ui container'>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/search'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown onSelectedChange={setSelected} selected={selected} options={options} />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
}
