import { useState } from 'react';
import './App.css';

function App() {
    const [editable, setEditable] = useState(-1);
    const [people, setPeople] = useState([
        {
            name: "Rodylin Bernales",
            netWorth: 100000,
            address: "Guiwanon, Tubigon, Bohol"
        },
        {
            name: "John Doe",
            netWorth: 50000,
            address: "123 Main St, Anytown"
        }
    ]);

    function handleClick(index) {
        setEditable(index);
    }

    function handleChange(index, field, event) {
        const updatedPeople = [...people];
        updatedPeople[index] = { ...updatedPeople[index], [field]: event.target.value };
        setPeople(updatedPeople);
    }

    function handleSubmit(index, event) {
        event.preventDefault();
        setEditable(-1);
    }

    return (
        <div className="app-container">
            {people.map((person, index) => (
                <div key={index} className="card">
                    <h1>Teacher</h1>
                    {editable === index ? (
                        <form onSubmit={(e) => handleSubmit(index, e)} className="edit-form">
                            <div className="input-group">
                                <label htmlFor={`name-${index}`}>Name</label>
                                <input type="text" id={`name-${index}`} value={person.name} onChange={(e) => handleChange(index, 'name', e)} />
                            </div>
                            <div className="input-group">
                                <label htmlFor={`address-${index}`}>Address</label>
                                <input type="text" id={`address-${index}`} value={person.address} onChange={(e) => handleChange(index, 'address', e)} />
                            </div>
                            <div className="input-group">
                                <label htmlFor={`netWorth-${index}`}>Net Worth</label>
                                <input type="text" id={`netWorth-${index}`} value={person.netWorth} onChange={(e) => handleChange(index, 'netWorth', e)} />
                            </div>
                            <button type="submit" className="btn save-btn">Save</button>
                        </form>
                    ) : (
                        <table className="info-table">
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>{person.name}</td>
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <td>{person.address}</td>
                                </tr>
                                <tr>
                                    <th>Net Worth</th>
                                    <td>{person.netWorth}</td>
                                </tr>
                            </tbody>
                        </table>
                    )}
                    <button className="btn edit-btn" onClick={() => handleClick(index)}>Edit</button>
                </div>
            ))}
        </div>
    );
}

export default App;
