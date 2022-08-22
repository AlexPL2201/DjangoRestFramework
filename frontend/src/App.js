import './App.css';
import React from 'react';
import axios from "axios";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom'

import UserList from "./components/User";
import ToDoList from "./components/ToDo";
import ProjectList from "./components/Projects"
import Navbar from "./components/Menu";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'navbar' : [
        {name : 'Список пользователей', href: '/users'},
        {name: 'Список проектов', href: '/projects'},
        {name: 'Список ToDo', href: '/notes'},
      ],
      'notes': [],
      'users': [],
      'projects': [],
    };
  }


  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/notes/')
      .then(response =>{
      this.setState({
        'notes':response.data.results
      })
    }).catch(error => console.log(error));

    axios.get('http://127.0.0.1:8000/api/projects/')
      .then(response =>{
      this.setState({
        'projects':response.data.results
      })
    }).catch(error => console.log(error));

    axios.get('http://127.0.0.1:8000/api/users/')
      .then(response =>{
      this.setState({
        'users':response.data
      })
    }).catch(error => console.log(error));
  }

  render() {
    return (
      <Router>
        <header>
          <Navbar navbarItems={this.state.navbar}/>
        </header>
        <main role="main" className="flex-shrink-0">
        <div className="container">
          <Routes>
            <Route exact path = '/users' element = {<UserList items={this.state.users} /> } />

            <Route exact path = '/notes' element = {<ToDoList items={this.state.notes} /> } />

            <Route exact path = '/projects' element = {<ProjectList items={this.state.projects} /> } />
          </Routes>
        </div>
        </main>
      </Router>
    )
  }
}


export default App;
