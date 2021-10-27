import React from "react";
import PropTypes from 'prop-types';
import style from './style.module.css';


export  default function  ContactList ({contacts, handleRemove}) {
 
    return (
      <ul className={style.contacts__list} >
        {contacts.map((el) => (
          <li key={el.id} className={style.contacts__item}>
            {el.name} : {el.number}
           <button
              type="button"
              id={el.id}
            onClick={handleRemove}
                    className={style.contact__button}
            >
              Delete
            </button>
            </li>            
        ))}
            
        </ul>
         
    );
}

     




ContactList.propTypes = {
    contacts: PropTypes.array,
    handleRemove: PropTypes.func,
}
