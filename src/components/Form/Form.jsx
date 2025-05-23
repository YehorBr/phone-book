import { FormStyled, Button, Input, Label} from './Form.styled';
import { useState} from 'react';

export const Form = ({addContact})=>{
 
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

   const handleChange = e => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "number":
        setNumber(e.target.value);
        break;
      default:
        break;
    }
  };

 const handleSubmit = e =>{
    e.preventDefault()

    const newContact={
        id:Date.now(),
        name:name,
        number: number
    }

    addContact(newContact)


 }


    return (
      <FormStyled action="" onSubmit={handleSubmit}>
        <Label htmlFor="">
          Name
          <Input
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"    
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
            value={name}
            onChange={handleChange}
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
            value={number}
            onChange={handleChange}
          />
        </Label>

        <Button>Add contact</Button>
      </FormStyled>
    );
}
