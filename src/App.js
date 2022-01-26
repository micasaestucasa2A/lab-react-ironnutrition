import React, { useState } from 'react';
import './App.css';
import Importedfood from './foods.json';
import Foodbox from './components/Foodbox';
import 'bulma/css/bulma.css';
import Form from './components/Form';
import Search from './components/Search';

const foodCopy = [...Importedfood];

function App() {
  const [foods, setFoods] = useState(foodCopy);
  const [form, setForm] = useState(false);


  const addFood = (food) => {
    setFoods([...foods, food]);
  };

  const showForm = () => {
    setForm(!form);
  };


  return (
    <div className="App">
      <button onClick={showForm}>Add food</button>
      {form && <Form addFood={addFood} />}
      {foods.map((meal) => {
        return (
          <Foodbox
            image={meal.image}
            name={meal.name}
            calories={meal.calories}
          />
        );
      })}
      ;
    </div>
  );
}

export default App;
