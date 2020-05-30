import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Recipe 
          title='pasta' 
          ingredients={["water", "lait"]}
          instructions="Mix Them"
          img="sp.jpg"
        />
        <Recipe 
          title='pasta' 
          ingredients={["water", "lait"]}
          instructions="Mix Them"
          img="sp.jpg"
        />
        <Recipe 
          title='pasta' 
          ingredients={["water", "lait"]}
          instructions="Mix Them"
          img="sp.jpg"
        />
      </div>
    );
  }
}

export default RecipeApp;
