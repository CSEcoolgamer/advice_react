import React from 'react';
import axios from 'axios';
/*
// to make request from get API.
This code imports the `axios` library, which is a  popular JavaScript library for making HTTP requests. 
The `axios` library provides a simple and consistent API for making HTTP requests, and it can be used to 
make requests to any API that supports HTTP.
(To make a HTTP request, you can use the `axios.get()` method.)

*/


import './App.css';

class App extends React.Component{
    
    state = {advice : '' };

    componentDidMount(){
        // console.log('COMPOUND DID MOUNT!');
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const { advice } = response.data.slip;

            // console.log(advice);   
            // instead of this as we want to use the advice outside(display of main page) this method's scope so 
            // setState is use 

            this.setState({advice});
            // this.setState({advice:advice});
            // this means set the state advice to const advice - we can write as {advice};

        })
        .catch((error) => {
            console.log(error);

        });
    }

    render() {

        const {advice} = this.state;
        return(
            // <h1> {advice} </h1>   - this way we can directly display the advice on react page.
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'>{advice}</h1>
                    <button className='button' onClick={this.fetchAdvice}>
                        <span>GIVE ME ADVICE!</span>
                    </button>

                </div>
            </div>
        );
    }
}

export default App;
