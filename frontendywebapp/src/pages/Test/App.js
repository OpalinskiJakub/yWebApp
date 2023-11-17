// Importujemy potrzebne moduły
import React, { useState, useEffect } from 'react';
import Dexie from 'dexie';

const db = new Dexie("testDB");
db.version(1).stores({
    persons:'++id,name',
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personform: {
                name: '',
            },
            inputValue: '', // Przechowuje wartość pola id
        };
    }

    addToDb = async () => {
        await db.persons.add({ name: this.state.personform.name });
        this.setState({ personform: { name: '' } });
    };

    deleteRecordById = async () => {
        const { inputValue } = this.state;

            await db.persons.delete(parseInt(inputValue));
            this.setState({ inputValue: '' });

    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            personform: {
                ...prevState.personform,
                [name]: value,
            },
        }));
    };

    handleInputDel = (e) => {
        const id = e.target.value; // Pobierz wartość pola id
        this.setState({ inputValue: id }); // Ustaw wartość pola inputValue
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    name="name"
                    value={this.state.personform.name}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.addToDb}>Dodaj do bazy</button>

                <input
                    type="text"
                    name="id"
                    value={this.state.inputValue}
                    onChange={this.handleInputDel}
                />
                <button onClick={this.deleteRecordById}>Usun</button>
            </div>
        );
    }
}

export default App;
