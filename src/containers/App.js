import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import robots from '../robots';
import './App.css';
import ErrorBundry from '../components/ErrorBoundry'


//koncepcja "stanu" opis aktualny aplikacji 
//trzeba to opisać, eby to zrozumieć
// poczytać o state construktor i set state 

//smart components with state + class 
//tę koncepcję ju widziałem => life cycle method
// https://pl.reactjs.org/docs/getting-started.html
// https://create-react-app.dev/doc/documentation-intro 
 // https://pl.reactjs.org/docs/introducing-jsx.html 

//to jest pierwszy etap (z constructorem ) mounting

class App extends Component { 
    constructor (){
        super();
        this.state = {
            robots: [],
            searchfield: ''
    }
    }

//ta metoda to drugi krok w cyklu  

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(user => {
                this.setState({robots:user})            
            }) 
    }


    //tu się fajne dzieje event zmienia wartość elementu obiektu 

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})            
    }

    render(){
        const { robots, searchfield } = this.state;

        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase()) 
        }) 

       return !robots.length ? <h1>Loading</h1> : 
          (
                <div className='tc'>
                    <h1 className="f1">Robo APP</h1>
                    <SearchBox searchChange = {this.onSearchChange} />
                    
                    <ErrorBundry>
                        <CardList robots = {filterRobots}/>
                    </ErrorBundry>
                </div>
    )}
    }



export default App; 