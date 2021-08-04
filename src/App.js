import React, { Component } from "react";

// create your App component here
class App extends Component {

    constructor() {
        super();
        this.state = {
            astronauts: []
        };
    }

    render() {
        let names = this.state.astronauts.map(person => person.name);
        let displayNames = (names) => names.map(name => <li key={name}>{name}</li>)
        return (
            <div>
                <h1>Astronauts In Space</h1>
                <ol>{displayNames(names)}</ol>
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json').then(resp => resp.json()).then(data => {
            this.setState({
                astronauts: data.people
            })
        })
    }
}


export default App;
