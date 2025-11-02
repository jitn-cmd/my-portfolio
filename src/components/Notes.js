// Notes.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Notes.css';

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState({ title: '', content: '', file: null });

    // Fetch notes from backend
    useEffect(() => {
        axios.get('http://127.0.0.1:5000/notes')
            .then(response => {
                setNotes(response.data);
            })
            .catch(error => console.error('Error fetching notes:', error));
    }, []);

    // Handle input changes for new note
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewNote(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle file input change
    const handleFileChange = (e) => {
        setNewNote(prevState => ({
            ...prevState,
            file: e.target.files[0]
        }));
    };

    // Add a new note
    const addNote = () => {
        const formData = new FormData();
        formData.append('title', newNote.title);
        formData.append('content', newNote.content);
        if (newNote.file) {
            formData.append('file', newNote.file);
        }

        axios.post('http://127.0.0.1:5000/notes', formData)
            .then(response => {
                setNotes([...notes, response.data]);
                setNewNote({ title: '', content: '', file: null }); // Clear input fields
            })
            .catch(error => console.error('Error adding note:', error));
    };

    // Delete a note
    const deleteNote = (id) => {
        axios.delete(`http://127.0.0.1:5000/notes/${id}`)
            .then(() => {
                setNotes(notes.filter(note => note.id !== id));
            })
            .catch(error => console.error('Error deleting note:', error));
    };

    // Toggle hide/unhide note
    const toggleHide = (id, isHidden) => {
        axios.put(`http://127.0.0.1:5000/notes/${id}/hide`, { is_hidden: !isHidden })
            .then(() => {
                setNotes(notes.map(note =>
                    note.id === id ? {...note, is_hidden: !isHidden } : note
                ));
            })
            .catch(error => console.error('Error toggling hide status:', error));
    };

    return ( <
        div >
        <
        h2 > Notes < /h2>

        { /* Add New Note Form */ } <
        div >
        <
        input type = "text"
        name = "title"
        value = { newNote.title }
        onChange = { handleInputChange }
        placeholder = "Title" /
        >
        <
        textarea name = "content"
        value = { newNote.content }
        onChange = { handleInputChange }
        placeholder = "Content" /
        > { /* File input for uploading PDF/Word files */ } <
        input type = "file"
        onChange = { handleFileChange }
        accept = ".pdf,.doc,.docx" / >
        <
        button onClick = { addNote } > Add Note < /button> <
        /div>

        { /* Display Notes */ } <
        div className = "note-container" > {
            notes.map(note => ( <
                div key = { note.id }
                className = { `note ${note.is_hidden ? 'hidden' : 'visible'}` } >
                <
                h3 > { note.title } < /h3> <
                p > { note.content } < /p> <
                small > { note.created_at } < /small>

                <
                div >
                <
                button className = "delete"
                onClick = {
                    () => deleteNote(note.id) } > Delete < /button> <
                button className = "hide"
                onClick = {
                    () => toggleHide(note.id, note.is_hidden) } > { note.is_hidden ? 'Unhide' : 'Hide' } <
                /button> <
                /div> <
                /div>
            ))
        } <
        /div> <
        /div>
    );
};

export default Notes;