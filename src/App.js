import React from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
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

const showAccordion = () => {
  if (window.location.pathname === '/') {
    return <Accordion items={items} />;
  }
};

const showList = () => {
  if (window.location.pathname === '/search') {
    return <Search />;
  }
};

const showDropdown = (selected, setSelected) => {
  if (window.location.pathname === '/dropdown') {
    return <Dropdown onSelectedChange={setSelected} selected={selected} options={options} />;
  }
};

const showTranslate = () => {
  if (window.location.pathname === '/translate') {
    return <Translate />;
  }
};

export default function App() {
  const [selected, setSelected] = React.useState(options[0]);
  return (
    <div className='ui container'>
      {showAccordion()}
      {showDropdown(selected, setSelected)}
      {showList()}
      {showTranslate()}
    </div>
  );
}
