import React from 'react';

class InfoTooltip extends React.Component {
  render() {
    return (
      <div className={`popup popup_type_tooltip ${this.props.isOpen && 'popup_opened'}`}>
        <div className="popup__container">
          <button className="popup__close" onClick={this.props.onClose}>Закрыть уведомление</button>
          <div className="tooltip">
            <div className={`tooltip__icon tooltip__icon_type${this.props.isLogined ? '_success' : '_error'}`}>{this.props.isLogined ? 'Успех' : 'Провал'}</div>
            <h2 className='tooltip__title'>{this.props.isLogined ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoTooltip;
