import { List, Contact, DelButton, Text } from "./Contacts.styled"

export const ContactsList = ({contacts, deleteContact})=>{
    return <List>
    {contacts.map((contact)=>{
        return <Contact>
            <Text>{contact.name}</Text>
            <Text>{contact.number}</Text>
            <DelButton onClick={()=>{deleteContact(contact.id)}} type="button">Delete</DelButton>
        </Contact>
    })}
    </List>
}