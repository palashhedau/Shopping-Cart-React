const initialState = {
	totalShoppingItems : [
	{itemName : 'Pasta' , cost : 12 , ordered : false , quantity : 1 },
	{itemName : 'Pizza' , cost : 27 , ordered : false , quantity : 1},
	{itemName : 'Mushroom Risotoo' , cost : 16 , ordered : false , quantity : 1},
	{itemName : 'Panzenella' , cost : 10 , ordered : false , quantity : 1},
	{itemName : 'Tiramisa', cost : 10 , ordered : false , quantity : 1},
	{itemName : 'Bruschetta', cost : 6 , ordered : false , quantity : 1},
	{itemName : 'Pani Puri' , cost : 8 , ordered : false , quantity : 1},
	{itemName : 'Coke' , cost : 2 , ordered : false , quantity : 1},
	{itemName : 'Milk' , cost : 4 , ordered : false , quantity : 1},
	{itemName : 'Apple' , cost : 3 , ordered : false , quantity : 1},
	{itemName : 'Banana' , cost : 2 , ordered : false , quantity : 1}],
	totalPurchasedItem : [] ,
	totalCost : 0
}



export default function  reducer (state=initialState , action )  {
	switch(action.type){
		case 'SELL_ITEMS' : {
			
			
			if(state.totalPurchasedItem.length === 0 ){
				return Object.assign({} , state , {
					totalCost : state.totalCost += action.payload.cost ,
					totalPurchasedItem : [...state.totalPurchasedItem , action.payload],

				})
			}else{

				var found = false ; 

				for(var i in state.totalPurchasedItem){
					console.log('Iteration ' , i ) ; 
					if(state.totalPurchasedItem[i].itemName === action.payload.itemName){
						console.log('FOund ', i );
						found = true ; 
						return Object.assign({}, state , {
							totalCost : state.totalCost += action.payload.cost ,
							totalPurchasedItem : state.totalPurchasedItem.map(item => {
								if(item.itemName === action.payload.itemName){
									return Object.assign({}, item ,{
										quantity : item.quantity + 1 
								})
								}else{
									return item ; 
								}
							})
						}) 

				}else{
						console.log('Not Found ' , i )
					}
				}


				if(found === false ){
					console.log('New item ') ; 
					return Object.assign({} , state , {
						totalCost : state.totalCost += action.payload.cost ,
						totalPurchasedItem : [...state.totalPurchasedItem , action.payload]
					})
				}

			}
				
		
		}
		case 'REMOVE_ITEMS' : {
			for(var item1 in state.totalPurchasedItem){
				if(state.totalPurchasedItem[item1].itemName === action.payload.itemName){
					
				if(action.payload.quantity < 2){
					console.log('One item present')
					return Object.assign({} , state , {
						totalCost : state.totalCost - (action.payload.cost),
						totalPurchasedItem : state.totalPurchasedItem.filter((item) => item.itemName !== action.payload.itemName)
					})
				}else{
					console.log('Item present and more than 1 ')
					return Object.assign({} , state , {
						totalCost : state.totalCost - (action.payload.cost ),
						totalPurchasedItem : state.totalPurchasedItem.map((item) => {
							if(item.itemName === action.payload.itemName){
								return Object.assign({}, item , {
									quantity : item.quantity - 1
								})
							}else{
								return item ; 
							}
						})
					})
				}

			}
		}
	}
		default :
			return state ; 

	}

}