import React, {  Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';


// smart components  -VVVVVV-
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

// This "compDidMount" its called automatically even if not called.
// because we updated state in compDidMount, it runs (render) again.

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(responce => {
                return responce.json();
            }).then(users => {
                this.setState({ robots: users})
            })
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

        // adding loading if robots === 0
        if(this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f2'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList robots = {filteredRobots}/>
                </div>
            );
        }
    }
    
}
// to make the page interactive we need to join searchbox and cardlist connect togeether, USING STATE... but where? ... in APP!!!
// Remember State is parent of props (STATE >> props)
//Cardlist needs to filter out cards that are not matched. 
export default App;

