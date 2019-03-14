import React from 'react';
import Form from './components/Form'
import ContactList from "./components/ContactList"
import axios from 'axios'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [],
            newName: '',
            newNumber: ''
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                const persons = response.data
                this.setState({persons: persons})
            })
    }

    addNewPerson = (event) => {
        event.preventDefault()
        const personNames = this.state.persons.map(person => person.name)
        if (personNames.includes(this.state.newName) === false) {
            const personObject = {
                name: this.state.newName,
                number: this.state.newNumber
            }
            axios
                .post('http://localhost:3001/persons', personObject)
                .then(response => {
                    this.setState({
                        persons: this.state.persons.concat(response.data),
                        newName: '',
                        newNumber: ''
                    })
                })
        }

    }

    deleteContact = (event, id) => {
        event.preventDefault()
        const index = this.state.persons.findIndex(person => person.id === id);
        const personToDelete = this.state.persons[index];
        if (window.confirm("Poistetaanko " + personToDelete.name)) {
            axios
                .delete('http://localhost:3001/persons/' + id)
                .then(() => {
                    this.state.persons.splice(index, 1)
                    this.setState({
                        persons: this.state.persons
                    })
                })
        }
    }

    handleNewName = (event) => {
        this.setState({newName: event.target.value})
    }

    handleNewNumber = (event) => {
        this.setState({newNumber: event.target.value})
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
                    deleteContact={this.deleteContact}
                />
            </div>
        )
    }
}

export default App