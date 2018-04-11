import React, { Component } from "react";
import Recipe from './Recipe';

class Menu extends Component {
	
	constructor(props) {
        super(props);
    }

	render(){	
		return (
			<article>
		      <header>
		        <h1>{this.props.title}</h1>
		       	 <div className="recipes">
			       {this.props.recipes.map((recipe, i) =>
			       <Recipe key={i} {...recipe} />
			       )}
			     </div>
		      </header>
		    </article>
		)
	}
}

export default Menu;
