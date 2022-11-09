import React from 'react';

function Sidebar({ contacts, onAddContact, onDeleteContact, activeContact, setActiveContact }) {

    const sortedContacts = contacts.sort((a, b) => b.lastModified - a.lastModified);

    return <div className='sidebar'>
        <div className='sidebar-header'>
            <h1>Contacts</h1>
            <button onClick={onAddContact}>+</button>
        </div>
        <div className='sidebar-notes'>
            {sortedContacts.map((contact) => (
                <div className={`sidebar-contact ${contact.id === activeContact && 'active'}`} onClick={() => setActiveContact(contact.id)}>
                <div className='sidebar-contact-title'>
                    <strong>{contact.name}</strong>
                    <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
                </div>

                <div className='sidebar-contact-phoneNumber'>{contact.phoneNumber}</div>

                <div className='sidebar-contact-email'>{contact.email}</div>

                <p>{contact.body && contact.body.substr(0, 50) + '...'}</p>

                <small className='contact-meta'>
                    Last modified {new Date(contact.lastModified).toLocaleDateString('ru-RU', {
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </small>
            </div>
            ))}
        </div>
    </div>
}

export default Sidebar;