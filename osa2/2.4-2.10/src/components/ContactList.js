import React, {Component} from 'react';

class ContactList extends Component {

    render() {
        return (
            <div>
                <h2>Numerot</h2>
                <table>
                {this.props.persons.map(person =>
                    <tr key={person.id}>
                        <td>{person.name}</td><td>{person.number}</td>
                        <button onClick={ (event) => this.props.deleteContact(event, person.id)}>
                            Poista
                        </button>
                    </tr>)}
                    </table>
            </div>
        );
    }
}

export default ContactList;