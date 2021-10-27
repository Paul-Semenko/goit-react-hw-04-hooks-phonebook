import React from "react";
import PropTypes from 'prop-types';
import style from './style.module.css';

export default function Filter({handleChange}) {
  
    return (
      <>
        <label htmlFor="search" className={style.filter__title}>
          Find contacts by name
        
        <input
          
                    autoComplete="off"
                    id="search"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]"
                    onChange={(e) => {
                        e.preventDefault();
                        handleChange(e);
                    }}
                    className={style.filter__input}
            ></input>
            </label>
      </>
    );
}




Filter.propTypes = {
    handleChange: PropTypes.func,
}

