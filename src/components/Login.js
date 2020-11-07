import React from 'react';
import { withRouter } from 'react-router-dom';
import Auth from '../utils/auth';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    Auth.login(email, password).then((json) => {
      console.log(json);
      this.props.handleLogin(); // Авторизовали юзера
      this.props.history.push('/'); // Отправили пользователя на главную страницу как авторизованного
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <main className='authorisation'>
        <h1 className="authorisation__title">Вход</h1>
        <form onSubmit={this.handleSubmit} method='POST' className="authorisation__form" name="authorisation-form" noValidate>
          <input onChange={this.handleChange} type="email" name="email" className="authorisation__form-input" id="Email" minLength="6" maxLength="40" aria-label="Email" placeholder="Email" required />
          <input onChange={this.handleChange} type="password" name="password" className="authorisation__form-input" id="Password" minLength="6" maxLength="40" aria-label="Пароль" placeholder="Пароль" required />
          <button type="submit" className="authorisation__form-submit">Войти</button>
        </form>
      </main>
    );
  }
}

export default withRouter(Login);
