import React, { useState, useEffect } from 'react';

function ItemList() {
  // State to store the fetched items
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetching data from the API endpoint
    fetch('https://api.apis.guru/v2/list.json')
      // Parsing the response as JSON
      .then(response => response.json())
      .then(data => {
        // Extracting item names from the fetched data
        const itemNames = Object.keys(data).map(key => data[key].info.title);
        // Updating state with the extracted item names
        setItems(itemNames);
      })
      // Handling fetch errors
      .catch(error => console.error('Error fetching items:', error));
  }, []); // Empty dependency array to trigger effect only once when component mounts

  return (
    <div>
      <h2>API List</h2>
      <ul>
        {items.map((item, index) => (
          // Rendering a list item for each fetched item
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
