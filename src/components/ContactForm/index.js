import { useState } from 'react'
import './style.scss'

const ContactForm = ({ addContact }) => {
   const initialFormState = {
      firstName: '',
      lastName: '',
      phoneNumber: ''
   }
   const [contact, setContact] = useState(initialFormState)

   const onInputChange = e => {
      e.preventDefault();
      const { name, value } = e.target
      setContact({ ...contact, [name]: value, id: Math.random() * 1000 })
   }

   const onFormSubmit = e => {
      e.preventDefault();
      addContact(contact)
      setContact(initialFormState)
   }
   return (
      <div>
         <h1>Add a new contact</h1>
         <form onSubmit={onFormSubmit} className='form'>
            <div>

               <input
                  type='text'
                  placeholder='First name'
                  className='form-input'
                  name='firstName'
                  value={contact.firstName}
                  onChange={onInputChange}
                  autoComplete='off'
               />
            </div>
            <div>
               <input
                  type='text'
                  placeholder='Last name'
                  className='form-input'
                  name='lastName'
                  value={contact.lastName}
                  onChange={onInputChange}
                  autoComplete='off'
               />
            </div>
            <div>
               <input
                  type='number'
                  placeholder='Phone number'
                  className='form-input'
                  name='phoneNumber'
                  value={contact.phoneNumber}
                  onChange={onInputChange}
                  autoComplete='off'
                  required
               />
            </div>
            <div>
               <input className='form-submit' type='submit' value='Submit' />

            </div>
         </form>
      </div>
   );
}

export default ContactForm;