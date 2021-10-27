import { useState, useEffect} from "react";
import { v4 as uuid } from "uuid";
import style from './components/Filter/style.module.css';
import { ContactForm } from "./components/ContactForm/ContactForm";
import ContactList  from './components/ContactList/ContactList';
import Filter from "./components/Filter/Filter";


export default function App() {
  
  const [contacts, setContacts] = useState(() => {
    const contact = localStorage.getItem('contacts');
    if (contact) {
      return JSON.parse(contact);
    } else { return []; }
  });
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const formSubmitHandler = (name, number ) => {
    if (!contacts.find((el) => el.name === name)) {
      setContacts(prevContacts => 
        [...prevContacts, { name, number, id: uuid() }]);
    } else {
      alert(`${name} is already in contacts`);
    }
  };
  
  

 const handleFilter = () => {
    return contacts.filter((el) => {
      const arr = el.name.toLowerCase().split(" ");

      for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().match(filter) !== null) {
          return true;
        }
      }
      return false;
    });
};
  
  
 const handleChange = (e) => {
    const regExp = new RegExp(`^${e.target.value.toLowerCase()}`);
    setFilter(regExp);
    
  };


  

 const handleRemove = (e) => {
    setContacts(prevState =>
       prevState.filter((elem) => elem.id !== e.target.id));
  };


  
    
    return (
      <div>
        <ContactForm
          onSubmit={formSubmitHandler}
        />
        <h2 className={style.contacts__title}>Contacts</h2>
        <Filter handleChange={handleChange} />
        <ContactList contacts={handleFilter()}
          handleRemove={handleRemove}
          />
      </div>
    );

  
}


