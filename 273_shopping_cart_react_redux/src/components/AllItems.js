import React, { Component } from 'react';
import { connect } from 'react-redux' ; 
import {sellItem} from '../actions/shoppingCartAction'


class AllItems extends Component{
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
					
                     <div  className="col-lg-5 col-xs-7" style={textAligncenter} >
                     	{this.props.item.itemName} 
                     </div>
                     <div className="col-lg-4 col-xs-2"  style={textAligncenter}  >
                     	${this.props.item.cost} 
                     </div>
                     <div  style={textAligncenter} className="col-lg-3 col-xs-3" onClick={() => {
                                    this.props.sellItem(this.props.item);
                                }}>
                         <button className='btn btn-success btn-md'>Add</button>
                     	
                     </div>

					 
					 
					
				</div>


			)


	}


}




function mapDispatchToProps(dispatch) {
    return {
        sellItem : (data) => dispatch(sellItem(data))
    };
}


export default connect(null, mapDispatchToProps)(AllItems); 
