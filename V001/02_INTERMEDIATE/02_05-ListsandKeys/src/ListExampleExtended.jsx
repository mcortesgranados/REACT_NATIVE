import './App.css'
import React, { useState } from 'react';

const ListExampleExtended = () => {
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange']);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const updateItem = (index, newValue) => {
    const updatedItems = [...items];
    updatedItems[index] = newValue;
    setItems(updatedItems);
  };

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter new item"
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}{' '}
            <span>
              <button onClick={() => removeItem(index)}>Remove</button>
              <input
                type="text"
                value={item}
                onChange={(e) => updateItem(index, e.target.value)}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListExampleExtended;