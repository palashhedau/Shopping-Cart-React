import React, { Component } from 'react';
import { connect } from 'react-redux' ; 
import {removeItem} from '../actions/shoppingCartAction'


class PurchasedItems extends Component{
	


	render(){

		const textAlignLeft = {
			textAlign: "left"
		}

		const textAlignRight = {
			textAlign: "right"
		}

		const textAligncenter = {
			
			 //paddingTop:"60px", 
			 //fontSize: "120%",
			// borderStyle: "solid",
			 //borderWidth: "1px"
			 display: "inline"
		}

		return (
				
					
				<div > 
					
                     <div className="col-lg-5 col-xs-7"  style={textAligncenter} >
                     	{this.props.item.itemName} 
                     </div>
                     <div className="col-lg-4 col-xs-2"  style={textAligncenter}  >
                     	qty:{this.props.item.quantity}
                     </div>
                     <div  style={textAligncenter} className="col-lg-3 col-xs-3" >
                         <button className='btn btn-danger btn-md' onClick={() => {
                                    this.props.removeItem(this.props.item);
                                }}>Del</button>
                     	
                     </div>

					 
					 
					
				</div>


			)


	}


}




function mapDispatchToProps(dispatch) {
    return {
        removeItem : (data) => dispatch(removeItem(data))
    };
}


export default connect(null, mapDispatchToProps)(PurchasedItems); 
