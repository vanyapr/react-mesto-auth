const authUrl = 'https://auth.nomoreparties.co';

// Метод регистрации на сервисе
const register = (email, password) => {
  return fetch(`${authUrl}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, email }),
  }).then((responce) => {
    if (responce.status === 201) {
      return responce.json();
    } else {
      console.log('Не удалось зарегистрировать пользователя');
    }
  }).then((json) => {
    if (json) {
      console.log(json.data);
      return json.data;
    }
  }).catch((error) => {
    console.log(error);
  });
};

// Метод авторизации на сервисе
const login = (email, password) => {
  return fetch(`${authUrl}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, email }),
  }).then((responce) => {
    if (responce.status === 200) {
      return responce.json();
    }
  }).catch((error) => {
    console.log(error);
  });
};

export default {
  register,
  login,
};
