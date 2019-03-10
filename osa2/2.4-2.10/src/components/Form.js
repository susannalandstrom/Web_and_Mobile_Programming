import React, {Component} from 'react';

class Form extends Component {

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <form onSubmit={this.props.addNewPerson}>
                    <div>
                        nimi: <input
                        value={this.props.newName}
                        onChange={this.props.handleNewName}
                    />
                    </div>
                    <div>
                        numero: <input
                        value={this.props.newNumber}
                        onChange={this.props.handleNewNumber}
                    />
                    </div>
                    <div>
                        <button type="submit">lisää</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;