import React, {Component} from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      searchString: '',
    };
  }
  searchValue = (stringValue) => {

    this.setState({
      ...this.state,
      searchString: stringValue,
    });
  }

  renderItems(){
    const toBeFilter = this.state.searchString;
    const recipes = this.recipes;

    return(
    recipes.filter((toFilterRecipe) => (
       toFilterRecipe.title.toLowerCase().includes(toBeFilter.toLowerCase()) ||
       toFilterRecipe.ingredients.toLowerCase().includes(toBeFilter.toLowerCase())
    )).map((recipe,index) => {
      return (
          <RecipeItem
              key={index}
              thumbnail={recipe.thumbnail}
              title={recipe.title}
              ingredients={recipe.ingredients}
              href={recipe.href}
              search={toBeFilter}

          />
      );
    })
    )
  }

  render() { 
    
    return (
      <div className="App">
        <Navbar 
          searchValue={this.searchValue} 
          value={this.state.searchString} 
        />
        <div className="container mt-10">
          <div className="row">
            {this.renderItems()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
