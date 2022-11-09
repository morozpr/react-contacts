import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import Main from './Main';
import Sidebar from './Sidebar';

function App() {

  const [contacts, setContacts] = useState(JSON.parse(localStorage.contacts) || []);
  const [activeContact, setActiveContact] = useState(false);


  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])

  const onAddContact = () => {
    const newContact = {
      id: uuid(),
      name: 'Unnamed',
      phoneNumber: '',
      email: '',
      body: '',
      lastModified: Date.now(),
    }

    setContacts([newContact, ...contacts]);

  }

  const onUpdateContact = (updatedContact) => {
    const updatedContactsArray = contacts.map((contact) => {
      if(contact.id === activeContact) {
        return updatedContact;
      }

      return contact;
    });

    setContacts(updatedContactsArray);
  }

  const onDeleteContact = (idToDelete) => {
    setContacts(contacts.filter((contact) => contact.id !== idToDelete));
  }

  const getActiveContact = () => {
    return contacts.find((contact) => contact.id === activeContact)
  } 

  return (
    <div className="App">
      <Sidebar contacts={contacts} 
      onAddContact={onAddContact} 
      onDeleteContact={onDeleteContact}
      setActiveContact={setActiveContact}
      />
      <Main activeContact={getActiveContact()}  onUpdateContact={onUpdateContact}/>
    </div>
  );
}

export default App;
