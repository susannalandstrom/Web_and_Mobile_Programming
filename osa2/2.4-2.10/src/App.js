import React from 'react';
import Form from './components/Form'
import ContactList from "./components/ContactList"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                { name: 'Arto Hellas', number: '0505555555' }
            ],
            newName: '',
            newNumber: ''
        }
    }

    addNewPerson = (event) => {
        event.preventDefault()
        var persons = this.state.persons
        const personNames = persons.map(person => person.name)
        persons = personNames.includes(this.state.newName) ? this.state.persons : persons.concat({ name: this.state.newName, number: this.state.newNumber})
        this.setState({
            persons: persons,
            newName: '',
            newNumber: ''})
    }

    handleNewName = (event) => {
        this.setState({ newName: event.target.value })
    }

    handleNewNumber = (event) => {
        this.setState({ newNumber: event.target.value })
    }

    render() {
        return (
            <div>
                <Form
                    newName={this.state.newName}
                    newNumber={this.state.newNumber}
                    addNewPerson={this.addNewPerson}
                    handleNewName={this.handleNewName}
                    handleNewNumber={this.handleNewNumber}
                />
                <ContactList
                    persons={this.state.persons}
                />
            </div>
        )
    }
}

export default App