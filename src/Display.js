import React, { Component } from 'react';
import axios from 'axios';
import UserRow from './UserRow';

class Display extends Component {
    constructor() {
        super()
        this.state = {
            users_data: [],
            givenName: '',
            surname: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        axios.get(`${ process.env.REACT_APP_HOST}/api/data_retrieve`).then(res => {
            this.setState({
                users_data: res.data
            })
        })
    }
    handleInputChange(newState) {
        this.setState({
            ...this.state, ...newState
        })
    }

    render() {
        const users = this.state.users_data
        .filter(({ givenname, surname }) =>
            surname && surname.toLowerCase().indexOf(this.state.surname.toLowerCase()) === 0 &&
            givenname && givenname.toLowerCase().indexOf(this.state.givenName.toLowerCase()) === 0)
        .map(user => <UserRow key={user.id} {...user} />)

        console.log(users);
        return(
            <div>
                <div className='search-input-main-parent' >
                    <input
                    className='search-input-box'
                    name='first'
                    type='search'
                    value={this.state.givenName}
                    placeholder='First Name'
                    onChange={({target: { value }}) => this.handleInputChange({ givenName: value })}
                    />
                    <input
                    className='search-input-box'
                    name='last'
                    type='search'
                    value={this.state.surname}
                    placeholder='Last Name'
                    onChange={({target: { value }}) => this.handleInputChange({ surname: value })}
                    />
                </div>
                <div className='width' >
                    <div className='list-of-names-main-parent' >
                        {users}
                    </div>
                </div>
            </div>
        )
    }
}
export default Display;