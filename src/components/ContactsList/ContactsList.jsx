export const ContactsList = ({contacts, deleteContact})=>{
    return <ul>
    {contacts.map((contact)=>{
        return <li>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button onClick={()=>{deleteContact(contact.id)}} type="button">delete</button>
        </li>
    })}
    </ul>
}