import React, { Component } from "react";

class Recipe extends Component {
	
	constructor(props) {
        super(props);
    }

	render(){	
		return (
			<section id={this.props.name.toLowerCase().replace(/ /g, "-")}>
				<h1>{this.props.name}</h1>
				<ul className="ingredients">
					{this.props.ingredients.map((ingredient, i) => (
						<li key={i}>{ingredient.name}</li>
					))}
				</ul>
				<section className="instructions">
					<h2>Cooking Instructions</h2>
					{this.props.steps.map((step, i) => <p key={i}>{this.props.step}</p>)}
				</section>
			</section>
		)
	}
}

export default Recipe;
