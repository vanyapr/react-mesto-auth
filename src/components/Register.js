import React from 'react';

class Register extends React.Component {
  render() {
    return (
      <main className='authorisation'>
        <h1 className="authorisation__title">Регистрация</h1>
        <form className="authorisation__form" name="authorisation-form" noValidate="">
          <input type="email" name="email" className="authorisation__form-input" id="Email" minLength="6" maxLength="40" aria-label="Email" placeholder="Email" required />
          <input type="password" name="password" className="authorisation__form-input" id="Password" minLength="6" maxLength="40" aria-label="Пароль" placeholder="Пароль" required />
          <button type="submit" className="authorisation__form-submit">Зарегистрироваться</button>
        </form>
        <p className='authorisation__text'>Уже зарегистрированы? <a className='authorisation__form-link link' href="/sign-in" title="">Войти</a></p>
      </main>
    );
  }
}

export default Register;
