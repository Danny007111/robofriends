import React, {  Component } from 'react';
import CardList from './CardList';
import { robots } from './robots'; 
import SearchBox from './SearchBox';
import './App.css';



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    // const [find, onFind] = useState('')
    // Every time search changes it (logs) -puts- out an EVENT
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
        
        
        
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return (
            <div className='tc'>
                <h1 className='f2'>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots = {filteredRobots}/>
            </div>
        );
    }
    
}
// to make the page interactive we need to join searchbox and cardlist connect togeether, USING STATE... but where? ... in APP!!!
// Remember State is parent of props (STATE >> props)
//Cardlist needs to filter out cards that are not matched. 
export default App;