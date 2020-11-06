import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import logoPath from '../images/logo.svg';

const Header = React.memo((props) => {
  return (
    <header className="header">
      <Link to="/" title="Место" className="logo">
        <img src={logoPath} alt="Место" className="logo__image"/>
      </Link>
      { !props.isLogined &&
        <Switch>
          <Route exact path='/sign-up'>
            <Link to='/sign-in' title='Авторизоваться' className='header__link link'>Войти</Link>
          </Route>
          <Route exact path='/sign-in'>
            <Link to='/sign-up' title='Зарегистрироваться' className='header__link link'>Регистрация</Link>
          </Route>
        </Switch>
      }
    </header>
  );
});

export default Header;
