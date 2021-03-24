
const ContactList = ({ contacts }) => {
   const list = contacts.map(contact => (
      <div className='contact' key={Date.now() + Math.random()}>
         <p className='contact-data'>{contact.firstName}</p>
         <p className='contact-data'>{contact.lastName}</p>
         <p className='contact-data'>{contact.phoneNumber}</p>
      </div>
   ))
   return (
      <div>
         {list}
      </div>
   )
}

export default ContactList;