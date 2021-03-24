import logo from './logo.svg';
import './App.scss';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { useState } from 'react';

function App() {

  const [newContacts, setNewContacts] = useState([])
  const addContact = contact => {
    setNewContacts([...newContacts, contact])
  }

  const sortedArray = (contacts, fieldName = 'lastName') => {
    return contacts.sort(function (a, b) {
      const nameA = a[fieldName].toLowerCase(), nameB = b[fieldName].toLowerCase()
      if (nameA < nameB)
        return -1
      if (nameA > nameB)
        return 1
      return 0
    })
  }
  return (
    <div>
      <ContactForm addContact={addContact} />
      <ContactList contacts={sortedArray(newContacts)} />
    </div>
  );
}

export default App;
