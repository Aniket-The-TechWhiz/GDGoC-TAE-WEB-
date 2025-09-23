import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EventForm from '../../components/admin/EventForm';

interface Event {
    _id: string;
    title: string;
    type: string;
    date: string;
    time: string;
    location: string;
    url?: string;
    status: 'Upcoming' | 'Past Event';
}

const EventManagement: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [editingEvent, setEditingEvent] = useState<Event | null>(null);
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate();

    const API_URL = 'http://localhost:5000/api/events';

    const fetchEvents = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Failed to fetch events');
            }
            const data = await response.json();
            setEvents(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleDelete = async (id: string) => {
        const adminKey = localStorage.getItem('x-admin-key');
        if (!adminKey) {
            alert('Admin key is missing. Please log in.');
            return;
        }

        if (window.confirm('Are you sure you want to delete this event?')) {
            try {
                const response = await fetch(`${API_URL}/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'x-admin-key': adminKey,
                    },
                });

                if (response.status === 204) {
                    alert('Event deleted successfully!');
                    fetchEvents();
                } else {
                    const errorData = await response.json();
                    alert(`Failed to delete event: ${errorData.message}`);
                }
            } catch (err) {
                alert('An error occurred while deleting the event.');
            }
        }
    };

    const handleCreateClick = () => {
        setEditingEvent(null);
        setShowForm(true);
    };

    const handleEditClick = (event: Event) => {
        setEditingEvent(event);
        setShowForm(true);
    };

    const handleFormSuccess = () => {
        setShowForm(false);
        setEditingEvent(null);
        fetchEvents();
    };

    if (isLoading) return <div>Loading events...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="event-management-container">
            <div className="admin-main-content">
                {!showForm && (
                    <>
                        <h1>Manage Events</h1>
                        <button onClick={handleCreateClick} className="add-event-button">Create New Event</button>
                        <table className="events-table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Type</th>
                                    <th>Date</th>
                                    <th>Location</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {events.map((event) => (
                                    <tr key={event._id}>
                                        <td>{event.title}</td>
                                        <td>{event.type}</td>
                                        <td>{event.date}</td>
                                        <td>{event.location}</td>
                                        <td className="actions-cell">
                                            <button onClick={() => handleEditClick(event)} className="edit-button">Edit</button>
                                            <button onClick={() => handleDelete(event._id)} className="delete-button">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}
                {showForm && (
                    <EventForm event={editingEvent || undefined} onSuccess={() => setShowForm(false)} />
                )}
            </div>
        </div>
    );
};

export default EventManagement;