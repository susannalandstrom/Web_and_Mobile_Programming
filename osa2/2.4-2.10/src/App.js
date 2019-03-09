import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                { name: 'Arto Hellas' }
            ],
            newName: ''
        }
    }

    addNewName = (event) => {
        event.preventDefault()
        var persons = this.state.persons
        persons = persons.concat({ name: this.state.newName})
        console.log(persons)
        this.setState({
            persons: persons,
            newName: ''})
    }

    handleNewName = (event) => {
        this.setState({ newName: event.target.value })
    }

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <form onSubmit={this.addNewName}>
                    <div>
                        nimi: <input
                        value={this.state.newName}
                        onChange={this.handleNewName}
                    />
                    </div>
                    <div>
                        <button type="submit">lisää</button>
                    </div>
                </form>
                <h2>Numerot</h2>
                {this.state.persons.map(person => <p key={person.name}> {person.name}</p>)}
            </div>
        )
    }
}

export default App