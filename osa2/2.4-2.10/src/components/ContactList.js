import React, {Component} from 'react';

class ContactList extends Component {

    render() {
        return (
            <div>
                <h2>Numerot</h2>
                {this.props.persons.map(person => <p key={person.name}> {person.name} {person.number}</p>)}
            </div>
        );
    }
}

export default ContactList;