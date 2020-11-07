import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import logoPath from '../images/logo.svg';

const Header = React.memo((props) => {
  return (
    <header className="header">
      <Link to="/" title="Место" className="logo">
        <img src={logoPath} alt="Место" className="logo__image"/>
      </Link>

      <nav className='header__navigation'>
        <ul className='header__navigation-list'>
          <Switch>
            <Route exact path='/sign-up'>
              <li className='header__navigation-item'><Link to='/sign-in' title='Авторизоваться' className='header__link'>Войти</Link></li>
            </Route>
            <Route exact path='/sign-in'>
              <li className='header__navigation-item'><Link to='/sign-up' title='Зарегистрироваться' className='header__link'>Регистрация</Link></li>
            </Route>
            <Route exact path='/'>
              <li className='header__navigation-item'>{props.userEmail}</li>
              <li className='header__navigation-item'>
                <button onClick={props.onSignOut} title='Выйти' className='header__link header__link_type_logout'>Выйти</button>
              </li>
            </Route>
          </Switch>
        </ul>
      </nav>
    </header>
  );
});

export default Header;
