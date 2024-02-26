import React from 'react';
import CreateGame from '../../componentes/CreateGame/CreateGame';
import style from './Form.module.css';
import NavBar from '../../componentes/NavBar/NavBar';

const Form = () => {
  return (
    <div className={style.formContainer}>
      <NavBar />
        <CreateGame />
    </div>
  );
};

export default Form;