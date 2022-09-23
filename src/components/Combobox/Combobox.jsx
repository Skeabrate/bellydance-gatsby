import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelect } from 'downshift';
import Pyramid from 'assets/images/SVG/piramidka.svg';
import { Wrapper } from './Combobox.styles';

const items = ['Najnowszych', 'Najstarszych'];

const Combobox = ({ setSortByDate = () => {} }) => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({ items, initialSelectedItem: items[0] });

  useEffect(() => {
    if (selectedItem === 'Najnowszych') setSortByDate(true);
    else setSortByDate(false);
  }, [selectedItem, setSortByDate]);

  return (
    <Wrapper $isOpen={isOpen}>
      <button
        type='button'
        {...getToggleButtonProps()}
      >
        <Pyramid />
        <span>Od:</span>
        {selectedItem}
      </button>
      <ul {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <li
              style={highlightedIndex === index ? { backgroundColor: '#bde4ff' } : {}}
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              {item}
            </li>
          ))}
      </ul>
    </Wrapper>
  );
};

Combobox.propTypes = {
  setSortByDate: PropTypes.func.isRequired,
};

export default Combobox;
