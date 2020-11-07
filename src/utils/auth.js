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
    // Отлавливаем ошибку регистрации (ответ сервера)
    if (!responce.ok) {
      throw responce;
    }

    if (responce.status === 201) {
      return responce.json();
    } else if (responce.status === 400) {
      console.log('Ошибка регистрации');
    }
  }).catch((error) => {
    error.text().then((errorMessage) => {
      console.log(errorMessage);
    });
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
    // Отлавливаем ошибку авторизации (ответ сервера)
    if (!responce.ok) {
      throw responce;
    }
    if (responce.status === 200) {
      return responce.json();
    }
  }).catch((error) => {
    error.text().then((errorMessage) => {
      console.log(errorMessage);
    });
  });
};

export default {
  register,
  login,
};
