import React from 'react'

function renderIngredients(ingredients, search) {
    if(search !== '' && ingredients && ingredients.toLowerCase().includes(search.toLowerCase())) {
        const indice = ingredients.toLowerCase().indexOf(search.toLowerCase());
        const inicial = ingredients.slice(0,(indice > 1) ? indice:0);
        const marked = ingredients.slice(indice,indice + search.length);
        const last = ingredients.slice((indice + search.length),ingredients.length);

     return (
        <p className="card-text">
            <strong>Ingredients: </strong>
                {inicial}
                <mark>{marked}</mark>
                {last}
         </p>
     );
    } 
    return (
        <p className="card-text">
            <strong>Ingredients: </strong>
                {ingredients}
        </p>    
    )
}
function renderTitle(title, search) {
    if(search !== '' && title && title.toLowerCase().includes(search)) {
        const indice = title.toLowerCase().indexOf(search.toLowerCase());
        const inicial = title.slice(0,(indice > 1) ? indice:0);
        const marked = title.slice(indice,indice + search.length);
        const last = title.slice((indice + search.length),title.length);
     return (
        <h5 className="card-title">
            {inicial}
            <mark>{marked}</mark>
            {last}
        </h5>
     );
    } 
    return (
        <h5 className="card-title">{title}</h5>
        
    )
}

const RecipeItem = (props) => (
    <div className="col-sm-3 mt-4">
        <div className="card">
            <a  href={props.href}>
                <img className="card-img-top img-fluid" src={props.thumbnail} alt={props.title}/>
            </a>
            <div className="card-body">
                {renderTitle(props.title, props.search)}
                {renderIngredients(props.ingredients,props.search)}
            </div>
        </div>
    </div>
)

export default RecipeItem;