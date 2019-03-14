import React, {Component} from 'react';

class ContactList extends Component {

    render() {
        return (
            <div>
                <h2>Numerot</h2>
                <table>
                    <tbody>
                    {this.props.persons.map(person =>
                        <tr key={person.id}>
                            <td>{person.name}</td>
                            <td>{person.number}</td>
                            <td>
                                <button onClick={(event) => this.props.deleteContact(event, person.id)}>
                                    Poista
                                </button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ContactList;