import { Component } from "react";
import { Form } from "./Form/Form";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { Container } from "./Container/Container";
import { GlobalStyle } from "GlobalStyle";

export class App extends Component{
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  }

  addContact = (newContact) =>{
    const isContactExist = this.state.contacts.some(contact=>contact.name === newContact.name || contact.number === newContact.number)
    console.log(isContactExist);
    if(isContactExist){
      alert("Rosie Simpson is already in contacts")
      return 
    }
      this.setState((prevState)=>({
        contacts: [...prevState.contacts, newContact]
      }))
  }

  deleteContact= (id) =>{
    this.setState((prevState)=>({contacts: prevState.contacts.filter((contact)=>contact.id !== id)}))
  }

  filterChange = e =>{
    this.setState({filter: e.target.value})
 }


  render(){
      const filtered = this.state.contacts.filter(contact=>contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))

    return  <>
      <Container>
      <h1 style={{color: "#2f4f2f" }}>Phonebook</h1>


      <Form addContact={this.addContact}/>

      <h2 style={{color: "#2f4f2f" }}>Contacts</h2>

      <Filter filterValue={this.state.filter} filterChange={this.filterChange}/>

      {this.state.contacts.length === 0 ? (<p>У вас немає контактів!</p>) : (<ContactsList deleteContact={this.deleteContact}  contacts={filtered}/>)}
      </Container>

      <GlobalStyle/>
    </>
  }
}
