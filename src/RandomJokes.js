import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const RandomJokes = props => {

	useEffect(function sixRandomJokes(){

		axios.get('https://karljoke.herokuapp.com/jokes/knock-knock/6')
		.then(result=>{

		})
		.catch(error=>{
			res.status(500).send(error);
			console.log(error);
		});

	}, []);

	return (<>
		<div className='random-jokes'>
			<ul> <li>Hello!</li> </ul>

		</div>

	</>);


}

export default RandomJokes;
