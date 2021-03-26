import './style.scss'
import Contact from '../Contact/index'
const ContactList = ({ sortedContacts, setContacts, contacts }) => {

   return (
      <>
      <table className='contacts-table'>
         <caption className='contacts-table-caption'>Contacts</caption>
         <thead>
            <tr className='contacts-table-heading'>
               <th className='contacts-table-heading-column'>First Name</th>
               <th className='contacts-table-heading-column'>Last Name</th>
               <th className='contacts-table-heading-column'>Phone</th>
               <th className='contacts-table-heading-column'>Actions</th>
            </tr>
         </thead>
         <tbody>
            {sortedContacts.map(contact => (
               <Contact
                  contacts={contacts}
                  setContacts={setContacts}
                  contact={contact}
                  key={contact.id} />
            ))}
         </tbody>
      </table>
      {!sortedContacts.length && <p>Let's add someone, buddy</p>}
      </>
   )
}

export default ContactList;