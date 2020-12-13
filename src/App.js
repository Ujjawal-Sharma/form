import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        }
        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePhone = this.changePhone.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFirstName(event) {
        this.setState({
            firstName:event.target.value
        })
    }
    changeLastName(event) {
        this.setState({
            lastName:event.target.value
        })
    }
    changeEmail(event) {
        this.setState({
            email:event.target.value
        })
    }
    changePhone(event) {
        this.setState({
            phone:event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()

        const registered = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone
        }
        axios.post('http://localhost:5000/app/signup', registered)
            .then(response => console.log(response.data))

            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                phone: ''
            })
    }

    render() {
       return (
                <div className='container card  w-50 mt-5 shadow p-2 align-self-center bg-dark'>
                <h2 className='align-self-center text-danger'>Register</h2>
                    <div className='form-div card-body'>
                        <form onSubmit={this.onSubmit}>
                            <input type='text'
                             placeholder='First Name'
                             onChange={this.changeFirstName}
                             value={this.state.firstName}
                             className='form-control form-group'
                             />

                             <input type='text' 
                             placeholder='Last Name'
                             onChange={this.changeLastName}
                             value={this.state.lastName}
                             className='form-control form-group' 
                             />

                             <input type='text' 
                             placeholder='E-mail'
                             onChange={this.changeEmail}
                             value={this.state.email}
                             className='form-control form-group' 
                             />

                             <input type='phone' 
                             placeholder='Phone'
                             onChange={this.changePhone}
                             value={this.state.phone}
                             className='form-control form-group' 
                             />

                             <input type='submit' 
                             className='btn btn-danger btn-block'
                             value='Sign Up'
                             />
                        </form>
                    </div>
                </div>
            
       );
    }
}
export default App