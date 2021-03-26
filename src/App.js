import './App.scss';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { useState } from 'react';

function App() {

  const [newContacts, setNewContacts] = useState([])
  const [isForm, setIsForm] = useState(false)
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

  const toggleForm = () => {
    setIsForm(!isForm)
  }

  return (
    <div className='app-container'>
      <div className='app-navigation'>
        <input className='form-input search' placeholder='Search' />
        <button className='form-submit' onClick={toggleForm}>{!isForm ? 'Add Contact' : 'Close'}</button>
      </div>
      {isForm && <ContactForm addContact={addContact} />}
      <ContactList contacts={newContacts} setContacts={setNewContacts} sortedContacts={sortedArray(newContacts)} />
    </div>
  );
}

export default App;
