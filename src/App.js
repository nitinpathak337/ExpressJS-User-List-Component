import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {inputValue: '', userDetailsList: initialUserDetailsList}

  changeInput = event => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  deleteUser = uniqueNo => {
    const {userDetailsList} = this.state
    const filteredUserDetailsList = userDetailsList.filter(
      eachItem => eachItem.uniqueNo !== uniqueNo,
    )

    this.setState({userDetailsList: filteredUserDetailsList})
  }

  render() {
    const {inputValue, userDetailsList} = this.state
    const searchUsersList = userDetailsList.filter(eachUser =>
      eachUser.name.includes(inputValue),
    )
    console.log(inputValue)
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input type="search" value={inputValue} onChange={this.changeInput} />
        <ul className="list-container">
          {searchUsersList.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
