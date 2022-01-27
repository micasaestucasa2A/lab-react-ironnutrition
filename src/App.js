import React, { useState } from 'react';
import './App.css';
import Importedfood from './foods.json';
import 'bulma/css/bulma.css';
import Form from './components/Form';
import Search from './components/Search';
import Foodlist from './components/Foodlist';

const foodCopy = [...Importedfood];

function App() {
  const [foods, setFoods] = useState(foodCopy);
  const [form, setForm] = useState(false);
  const [searchedString, setSearchedString] = useState("");


  const addFood = (food) => {
    setFoods([...foods, food]);
  };

  const showForm = () => {
    setForm(!form);
  };

  let searchedFoods = null;
	if (searchedString !== "") {
		searchedFoods = foods.filter((food) => {
			return food.name.toLowerCase().includes(searchedString.toLowerCase());
		});
	} else {
		searchedFoods = foods;
	}


  return (
    <div className="App">
    <h1> More food ?</h1>
      <button onClick={showForm}>Add food</button>
      {form && <Form addFood={addFood} />}
      <h2> Menu navigation </h2>
      <Search
				searchedString={searchedString}
				callbackSearch={setSearchedString}
			/>
      <Foodlist foods={searchedFoods} />
    </div>
  );
}

export default App;
