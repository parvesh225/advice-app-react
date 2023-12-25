import React from 'react';
import axios from 'axios'
import './App.css';

class App extends React.Component {
    state = {
        advice: "Hi"
    }

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                console.log(response.data.slip);
                const {advice} = response.data.slip;
                this.setState({ advice })
            }) 
            .catch((error)=> {  
                console.log(error)
            })
    }
    render() {
        return( 
        
                <div className="app">
                    <div className="card">
                        <h1>{this.state.advice}</h1>
                        <button className='button' onClick={this.fetchAdvice}>
                            <span> Give Me Advice!</span>
                        </button>
                    </div>
                </div>
            )
    }
}

export default  App; 