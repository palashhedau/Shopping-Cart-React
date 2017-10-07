import React, { Component } from 'react';
import { connect } from 'react-redux' ; 
import AllItem from './AllItems'
import PurchasedItems from './PurchasedItems'
import {PropTypes} from 'prop-types'

class Home extends Component{
	
	


	render(){

		console.log("Render : " , this.props) ;
		const center = {
			align : "center"
		}

		

		const data = this.props.allShoppingItems.map((item , i) => {
			return  <AllItem  key={i} item={item}> </AllItem> ; 

		})


		const textAlignRight = {
			textAlign: "right"
		}



		return(
				
				<div className="container">
	
					<div className="col-sm-6 col-lg-6 col-md-6 col-xs-12">
							<div className=" content">
									    <div className="sidenav">
									    
										    <div className="panel panel-primary " style={center} >
													<div className="panel-heading"><h4 >Menu</h4></div>
															
													<div className="panel-body">
														     
														     	{data}

														</div>
															
											</div>

										</div>
								    
								  </div>
							
						
					
					</div>
					
					<div className="col-sm-6 col-lg-6 col-md-6 col-xs-12">
						<div className="padd content">
									    <div className="sidenav">
									    
										    <div className="panel panel-primary " style={center} >
													<div className="panel-heading"><h4 >Cart</h4></div>
															
													<div className="panel-body">
														<div>
															<div className='form-group'>
															
										    
														     
														     	{
														     		this.props.purchasedItem.map((item , i) => (
																	<PurchasedItems  key={i} item={item}> </PurchasedItems>

																	))
																}
														      
										    				
																
															</div>
																		
														</div>
																
													</div>


													<div className="panel-footer">
														<div >
															Total Cost : ${this.props.totalCost}
														</div>
													</div>
													
															
											</div>

										</div>
										<div style={textAlignRight}>

											<button className="btn btn-primary">Checkout</button>
														
										</div>
								    
								  </div>
							
					
					</div>
					

				</div>

				

			)
	}
}



Home.propTypes = {
   allShoppingItems: PropTypes.array,
   purchasedItem: PropTypes.array,
   totalCost: PropTypes.number,
   
}



function mapStateToProps(state){
	console.log('mapStateToProps  ::: ') ; 
	return {
		allShoppingItems : state.shoppingReducer.totalShoppingItems ,
		purchasedItem :  state.shoppingReducer.totalPurchasedItem,
		totalCost : state.shoppingReducer.totalCost
	}
}


export default connect(mapStateToProps)(Home) ;

