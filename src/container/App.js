import React, { Component } from 'react';
import Cardlist from '../compon/Cardlist'
import SearchBox from '../compon/SearchBox'
import './App.css'; 
import Scroll from '../compon/Scroll'


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

componentDidMount() {
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users =>this.setState ({robots: users}))

}

onsearchChange = (event) => {
   this.setState({searchField: event.target.value})
   
}
    
   render() {
    const filteredRobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    if (!this.state.robots.length){
        return <h1>Kindly Wait its currently loading</h1>
    }
    else {
        return (
            <div className='tc'>
            <h1 className= 'f1' >ROBOBESTIES</h1>
            <SearchBox searchChange={this.onsearchChange} />
            <Scroll>
            <Cardlist robots={filteredRobots}/>
            </Scroll>
            </div>
        );
        }
    
    
      };
    }
    
export default App;