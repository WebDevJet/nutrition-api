import React, { useState, useEffect } from 'react';
import Item from './components/Item';
import Search from './components/Search';
import Navbar from './layout/Navbar';
import axios from 'axios';

import './App.css';

function App() {
  const [items, setItems] = useState([]);

  //Hide items on component load
  // useEffect(() => {
  //   setSearch();
  // }, []);

  const setSearch = title => {
    axios
      .get(
        'https://nutritionix-api.p.rapidapi.com/v1_1/search/' +
          title +
          '?fields=item_name,item_id,brand_name,nf_calories,nf_total_fat',
        {
          headers: {
            'x-rapidapi-host': 'nutritionix-api.p.rapidapi.com',
            'x-rapidapi-key':
              'af07ef47f3msh43f00ace3ce35f3p131a37jsn67188fda3831'
          }
        }
      )
      .then(res => {
        console.log(res.data.hits);
        setItems(res.data.hits);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Navbar />

      <div className='container mx-auto'>
        <Search setSearch={setSearch} className='text-center' />
        <Item items={items} />
      </div>
    </>
  );
}

export default App;
