import React from 'react'



class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {login: '', password: ''}
    }

    handleChange(event) {
        this.setState( {
            [event.target.name]: event.target.value
        } );
    }

    handleSubmit(event) {
        this.props.get_token(this.state.login, this.state.password)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(event)=> this.handleSubmit(event)}>
                <div class="mb-3">
                    <label class="form-label">Логин</label>
                    <input type="text" class="form-control"  name="login"
                        value={this.state.login} onChange={(event)=>this.handleChange(event)} />
                </div>
                <div class="mb-3">
                    <label class="form-label">Пароль</label>
                    <input type="password" class="form-control" name="password"
                        value={this.state.password} onChange={(event)=>this.handleChange(event)} />
                </div>
                <input type="submit" class="btn btn-primary" value="Войти" />
            </form>
        );
    }
}

export default LoginForm