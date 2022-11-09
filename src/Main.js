import React from 'react';
import ReactMarkdown from 'react-markdown';

function Main({activeContact, onUpdateContact}) {

    const onEditField = (key, value) => {
        onUpdateContact({
            ...activeContact,
            [key]: value,
            lastModified: Date.now(),
        })
    };

    if(!activeContact) return <div className='no-active-contact'>No contact selected</div>

    return <div className='main'>
        <div className='main-contact-edit'>
            <input type="text" id='name' value={activeContact.name} onChange={(e) => onEditField('name', e.target.value)} autoFocus />
            <input type="text" id='phoneNumber' value={activeContact.phoneNumber} onChange={(e) => onEditField('phoneNumber', e.target.value)} />
            <input type="email" id='email' value={activeContact.email} onChange={(e) => onEditField('email', e.target.value)} />
            <textarea id='body' placeholder='write your note' value={activeContact.body} onChange={(e) => onEditField('body', e.target.value)} />
        </div>
        <div className='main-contact-preview'>
            <h1 className='preview-name'>{activeContact.name}</h1>
            <h2 className='preview-phoneNumber'>{activeContact.phoneNumber}</h2>
            <h3 className='preview-email'>{activeContact.email}</h3>
            <ReactMarkdown className='markdown-preview'>{activeContact.body}</ReactMarkdown>
        </div>
    </div>
}

export default Main;