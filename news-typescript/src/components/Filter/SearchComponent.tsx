import React, { useState } from 'react';
import DropdownComponent from '../Dropdown/DropdownComponent';
import { items, category, lang } from './SearhItems';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './SearchComponent.module.scss';


interface SearchComponentProps {
  darkMode: boolean;
  onSearch: (selectedValues: {
	q:string;
    country: string;
    category: string;
    language: string;
  }) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch ,darkMode}) => {
  const [selectedValues, setSelectedValues] = useState({
	q:'',
    country: '',
    category: '',
    language: ''
  });

  const handleSearch = () => {
    onSearch(selectedValues);
  };

  const handleDropdownChange = (type: string, value: string) => {
	console.log(value)
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [type]: value
    }));
  };

  return (
    <div className={!darkMode? styles.darkSearchComponent: styles.SearchComponent}>
      <input type='text' onChange={event => handleDropdownChange('q', event.target.value)}/>
      <DropdownComponent
        type='Country'
        items={items}
        onChange={(value) => handleDropdownChange('country', value)}
      />
      <DropdownComponent
        type='Category'
        items={category}
        onChange={(value) => handleDropdownChange('category', value)}
      />
      <DropdownComponent
        type='Language'
        items={lang}
        onChange={(value) => handleDropdownChange('language', value)}
      />

      <Tooltip title='search'>
        <Button
          type='primary'
          shape='circle'
          icon={<SearchOutlined />}
          onClick={handleSearch}
        />
      </Tooltip>
    </div>
  );
};

export default SearchComponent;
