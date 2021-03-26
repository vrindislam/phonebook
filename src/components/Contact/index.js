const Contact = ({ contact, contacts, setContacts }) => {

   const deleteHandler = () => {
      setContacts(contacts.filter(el => el.id !== contact.id))
   }

   return (
      <tr className='contacts-table-row'>
         <td className='contacts-table-row-data'>{contact.firstName}</td>
         <td className='contacts-table-row-data'>{contact.lastName}</td>
         <td className='contacts-table-row-data'>{contact.phoneNumber}</td>
         <td className='contacts-table-row-data actions'>
            <a className='contacts-table-btn' href={`tel:+${contact.phoneNumber}`} ><i className="fas fa-phone"></i></a>
            <button className='contacts-table-btn' onClick={deleteHandler}><i className="fas fa-trash-alt"></i></button>
         </td>
      </tr>
   )
}

export default Contact;