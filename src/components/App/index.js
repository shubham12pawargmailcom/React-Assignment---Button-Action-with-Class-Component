import React, {Component, useState} from "react";
import Button from '../Button';
import './style.css';

class App extends React.Component {
    constructor(props) {
		super(props);
	}

    render() {
    	return(
    		<div id="main">
			
			<Button/>
    		</div>
    	);
    }
}


export default App;

