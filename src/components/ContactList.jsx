import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactList = () => {

    const contactsList = [
        { id: 1, name: 'John Doe', phone: '123-456-7890' },
        { id: 2, name: 'Jane Smith', phone: '987-654-3210' },
        { id: 3, name: 'Bob Johnson', phone: '555-555-5555' },
    ];

    const [contacts, setContacts] = useState(contactsList);
    const [newContact, setNewContact] = useState({ name: '', phone: '' });
    const [showAddForm, setShowAddForm] = useState(false);

    const handleNameChange = (event) => {
        setNewContact({ ...newContact, name: event.target.value });
    };

    const handlePhoneChange = (event) => {
        setNewContact({ ...newContact, phone: event.target.value });
    };

    const addContact = () => {
        if (newContact.name && newContact.phone) {
            setContacts([...contacts, { ...newContact, id: contacts.length + 1 }]);
            setNewContact({ name: '', phone: '' });
            setShowAddForm(false);
        }
    };
    const deleteContact = (id) => {
        const updatedContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(updatedContacts);
    };

    const toggleAddForm = () => {
        setShowAddForm(!showAddForm);
    };

    return (
        <div className="App container">
            <h1 className="my-4">Contact List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.name}</td>
                            <td>{contact.phone}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteContact(contact.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="add-contact my-4">

                {!showAddForm ? (
                    <button className="btn btn-primary" onClick={toggleAddForm}>
                        Add Contact
                    </button>
                ) : (
                    <div className="add-form">
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Name"
                            value={newContact.name}
                            onChange={handleNameChange}
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Phone"
                            value={newContact.phone}
                            onChange={handlePhoneChange}
                        />
                        <button className="btn btn-primary mr-2" onClick={addContact}>
                            Save
                        </button>
                        <button className="btn btn-secondary" onClick={toggleAddForm}>
                            Cancel
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ContactList;

