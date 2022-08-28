import './App.css';
import React from 'react';
import axios from "axios";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
} from 'react-router-dom'

import UserList from "./components/User";
import ToDoList from "./components/ToDo";
import ProjectList from "./components/Projects"
import Navbar from "./components/Menu";
import LoginForm from "./components/Auth";
import Cookies from 'universal-cookie';
import './components/bootstrap/css/bootstrap.min.css';

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
      'auth': {'username': '', 'token': ''}
    };
  }

  set_token(username, token) {
    const cookies = new Cookies()
    cookies.set('token', token)
    cookies.set('username', username)
    this.setState({'auth':{'username': username, 'token': token}}, ()=>this.load_data())
  }

  is_authenticated() {
    return this.state.auth.token !== ''
  }

  logout() {
    this.set_token('', '')
  }

  get_token_from_storage() {
    const cookies = new Cookies()
    const token = cookies.get('token')
    const username = cookies.get('username')
    this.setState({auth:{'username': username, 'token': token}}, ()=>this.load_data())
  }

  get_token(username, password) {
    axios.post('http://127.0.0.1:8000/api-auth-token/', {username: username, password: password})
        .then(response => {
            this.set_token(username, response.data['token'])
        }).catch(error => alert('Неверный логин или пароль'))
  }

  load_data() {
    const headers = this.get_headers()

    axios.get('http://127.0.0.1:8000/api/notes/', {headers})
      .then(response =>{
      this.setState({
        'notes':response.data.results
      })
    }).catch(error => console.log(error));

    axios.get('http://127.0.0.1:8000/api/projects/', {headers})
      .then(response =>{
      this.setState({
        'projects':response.data.results
      })
    }).catch(error => {
      console.log(error);
      this.setState({projects: []})
    })

    axios.get('http://127.0.0.1:8000/api/users/', {headers})
      .then(response =>{
      this.setState({
        'users':response.data
      })
    }).catch(error => console.log(error));
  }

  get_headers() {
    let headers = { 'Content-Type': 'application/json' }
    if (this.is_authenticated()) {
        headers['Authorization'] = 'Token ' + this.state.auth.token
    }
    return headers
  }

  componentDidMount() {
    this.get_token_from_storage()
  }

  render() {
    return (
      <Router>
        <header>
          <Navbar navbarItems={this.state.navbar} username={this.state.auth.username} token={this.state.auth.token} logout={() => this.logout()}/>
        </header>
        <main role="main" className="flex-shrink-0">
        <div className="container">
          <Routes>
            <Route exact path = '/users' element = {<UserList items={this.state.users} /> } />

            <Route exact path = '/notes' element = {<ToDoList items={this.state.notes} /> } />

            <Route exact path = '/projects' element = {<ProjectList items={this.state.projects} /> } />

            <Route exact path = '/login' element = {<LoginForm get_token={(username, password) => this.get_token(username, password)} />} />
          </Routes>
        </div>
        </main>
      </Router>
    )
  }
}


export default App;
