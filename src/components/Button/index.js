import React from 'react';


export default class Button extends React.Component {
    constructor(props){
        super(props);
        
        this.state=({
            pTag:false
        });
        this.clickFn=this.clickFn.bind(this);
    }
    clickFn(){
        this.setState({pTag:true});
	};
    
    render(){
        return(
            <div>
           <button id="click" onClick={this.clickFn}>Dark</button>
            {this.state.pTag ? (<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p> ):null}
            
            </div>
        )
    }
}

