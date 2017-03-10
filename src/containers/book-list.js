import React, {Component} from 'react';
import {connect} from 'react-redux'; // converted BookList from component to container
import {selectBook} from '../actions/index'; //import action 'selectBook'
import {bindActionCreators} from 'redux'; //binds all actions through all reducers

class BookList extends Component{

	renderList(){
		return this.props.books.map((book) => {
			return (
				<li 
						key={book.title}
						onClick={() => this.props.selectBook(book)}
						className="list-group-item">
					{book.title}
				</li>
				);
		});
	}
	render(){
		return(
				<ul className = "list-group col-sm-4">
					{this.renderList()}
				</ul>
			)
	}
}

function mapStateToProps(state){
	//whatever is returned will show as props inside of BookList class
	return {
		books : state.books	
	};
}

//Anything returned from this function will endup as props on the Booklist container
function mapDispatchToProps(dispatch){
	//whenever selectBook is called, result should be passed to all our reducers
	return bindActionCreators({selectBook : selectBook},dispatch); //{key:value}
}

//promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);