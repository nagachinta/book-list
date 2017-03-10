//Action creator
export function selectBook(book){
	//selectBook is an action, it needs to return an action which is an object with a type property.
	return{
		type: 'BOOK_SELECTED',
		payload : book
	}
}