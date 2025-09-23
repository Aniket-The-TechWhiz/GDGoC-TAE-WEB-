import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface EventFormProps {
    event?: Event;
    onSuccess: () => void;
}

interface Event {
    _id: string;
    title: string;
    type: string;
    status: 'Upcoming' | 'Past Event';
    date: string;
    time: string;
    location: string;
    url?: string;
}

const EventForm: React.FC<EventFormProps> = ({ event, onSuccess }) => {
    const [formData, setFormData] = useState<Omit<Event, '_id'>>({
        title: '',
        type: '',
        status: 'Upcoming',
        date: '',
        time: '',
        location: '',
        url: '',
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (event) {
            setFormData(event);
        }
    }, [event]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');

        const adminKey = localStorage.getItem('x-admin-key');
        if (!adminKey) {
            setMessage('Admin key missing. Please log in.');
            navigate('/admin/login');
            return;
        }

        const method = event ? 'PATCH' : 'POST';
        const url = event ? `http://localhost:5000/api/events/${event._id}` : 'http://localhost:5000/api/events';

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'x-admin-key': adminKey,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage(`Event ${event ? 'updated' : 'created'} successfully!`);
                onSuccess();
            } else {
                const errorData = await response.json();
                setMessage(`Error: ${errorData.message}`);
            }
        } catch (err) {
            setMessage('An unexpected error occurred.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="event-form">
            <button
                type="button"
                onClick={() => onSuccess()}
                className="back-button"
            >
                &lt; Go Back
            </button>
            <h3>{event ? 'Edit Event' : 'Create New Event'}</h3>
            {message && <p className="form-message">{message}</p>}
            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required className="form-input" />
            <input type="text" name="type" value={formData.type} onChange={handleChange} placeholder="Type" required className="form-input" />
            <select name="status" value={formData.status} onChange={handleChange} className="form-select">
                <option value="Upcoming">Upcoming</option>
                <option value="Past Event">Past Event</option>
            </select>
            <input type="date" name="date" value={formData.date} onChange={handleChange} placeholder="Date" required className="form-input" />
            <input type="time" name="time" value={formData.time} onChange={handleChange} placeholder="Time" required className="form-input" />
            <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" required className="form-input" />
            <input type="text" name="url" value={formData.url} onChange={handleChange} placeholder="URL (optional)" className="form-input" />
            
            <button type="submit" className="form-button">{event ? 'Update Event' : 'Create Event'}</button>
        </form>
    );
};

export default EventForm;