import React from 'react';
import { useDispatch } from 'react-redux';
import { getAllGames } from '../../redux/actions/actionCreators';
import { Link } from 'react-router-dom';
import style from './Buttons.module.css';

const Buttons = () => {
    const dispatch = useDispatch();


    const handleClick = (event) => {
        event.preventDefault();
        dispatch(getAllGames());
      };


  return (
    <div className={style.buttonsContainer}>
        <button onClick={(event) => handleClick(event)} className={style.buttonContainer}>Reload Games</button>
        <button className={style.buttonContainer}><Link to='/home' className={style.button}>Home</Link></button>
        <button className={style.buttonContainer}><Link to='/form' className={style.button}>Create a New Game</Link></button>
    </div>
  );
};

export default Buttons;