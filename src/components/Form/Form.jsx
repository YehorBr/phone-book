import { Component } from 'react';
import { FormStyled, Button, Input, Label} from './Form.styled';

export class Form extends Component {
  state = {
    name: '',
    number: '', 
  };

  handleChange = e =>{
    this.setState({[e.target.name]: e.target.value})
 }

 handleSubmit = e =>{
    e.preventDefault()

    const newContact={
        id:Date.now(),
        name:this.state.name,
        number: this.state.number
    }

    this.props.addContact(newContact)


 }


  render() {
    return (
      <FormStyled action="" onSubmit={this.handleSubmit}>
        <Label htmlFor="">
          Name
          <Input
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"    
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Label>
        <Label htmlFor="">
          Number
          <Input
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </Label>

        <Button>Add contact</Button>
      </FormStyled>
    );
  }
}
