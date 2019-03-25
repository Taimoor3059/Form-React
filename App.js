import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: "",
            age:'',
            gender:'',
            nationality:'',
            Trump: false,
            Biden: false,
            Beto: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, type, value, checked} = event.target
        type === "checkbox" ? 
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='dabba'>
                <fieldset>
                    <form>
                        <input 
                            name='firstName' 
                            value={this.state.firstName} 
                            onChange={this.handleChange}
                            placeholder="First Name"
                        />
                        <br />
                        <br />
                        <input 
                            name='lastName'
                            value={this.state.lastName}
                            onChange={this.handleChange}
                            placeholder='Last Name'
                         />
                         <br />
                         <br />
                         <input
                            name='age'
                            value={this.state.age}
                            onChange={this.handleChange}
                            placeholder='Age'
                         />
                         <br />
                         <br />
                         <label>
                            <input 
                                type='radio' 
                                name='gender' 
                                value='Male' 
                                onChange={this.handleChange} 
                            /> Male
                            
                            <input 
                                type='radio' 
                                name='gender' 
                                value='Female' 
                                onChange={this.handleChange} 
                            /> Female
                        </label>
                        <br />

                        <select 
                            name='nationality' 
                            value={this.state.nationality} 
                            onChange={this.handleChange}
                            
                        >
                            <option value='United States'>United States</option>
                            <option value='France'>France</option>
                            <option value='Pakistan'>Pakistan</option>
                            <option value='Turkey'>Turkey</option>
                        </select>
                        <br />
 
                        <label><h2>Please choose the candidate you would vote for</h2>
                            <br />
                            <input type='checkbox' onChange={this.handleChange} name='Trump' checked={this.state.Trump} /> TRUMP
                            <br />
                            <input type='checkbox' onChange={this.handleChange} name='Beto' checked={this.state.Beto}  /> BETO
                            <br />
                            <input  type='checkbox' onChange={this.handleChange} name='Biden' checked={this.state.Biden} /> BIDEN
                            <br />
                           
                        </label>
                        <br />
                        <button>Submit</button>
                    </form>
                </fieldset>
                <br />

                <h3>Information you have provided</h3>
                <p>Name: {this.state.firstName} {this.state.lastName}</p> <br />
                <p>age: {this.state.age}</p> <br />
                <p>Gender: {this.state.gender}</p> <br />
                <p>Nationality: {this.state.nationality}</p> <br />
                <p>Trump: {this.state.Trump ? 'yes' : 'no'} </p> <br />
                <p>Beto: {this.state.Beto ? 'yes' : 'no'} </p> <br />
                <p>Biden {this.state.Biden ? 'yes' : 'no' } </p> <br />
            </div> 
        )
    }
}









export default App;
