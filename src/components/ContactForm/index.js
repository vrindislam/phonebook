import { useState } from 'react'

const ContactForm = ({ addContact }) => {
   const initialFormState = {
      firstName: '',
      lastName: '',
      phoneNumber: ''
   }
   const [contact, setContact] = useState(initialFormState)
   console.log('contactList', contact);

   const onInputChange = e => {
      e.preventDefault();
      const { name, value } = e.target
      setContact({ ...contact, [name]: value })
   }

   const onFormSubmit = e => {
      e.preventDefault();
      addContact(contact)
      setContact(initialFormState)
   }
   return (
      <div className='form-container'>
         <h1>PhoneBook</h1>
         <form onSubmit={onFormSubmit}>
            <div>
               <p>First name</p>
               <input
                  type='text'
                  className='form-input'
                  name='firstName'
                  value={contact.firstName}
                  onChange={onInputChange}
               />
            </div>
            <div>
               <p>Last name</p>
               <input
                  type='text'
                  className='form-input'
                  name='lastName'
                  value={contact.lastName}
                  onChange={onInputChange}
               />
            </div>
            <div>
               <p>Phone number</p>
               <input
                  type='number'
                  className='form-input'
                  name='phoneNumber'
                  value={contact.phoneNumber}
                  onChange={onInputChange}
               />
            </div>
            <div>
               <input className='submit' type='submit' />

            </div>
         </form>
      </div>
   );
}

export default ContactForm;