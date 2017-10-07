

export function sellItem(item){
	return {
		type : 'SELL_ITEMS',
		payload : item
	}
}


export function removeItem(item){
	console.log('From File Action ' , item);
	return {
		type : 'REMOVE_ITEMS',
		payload : item
	}
}





