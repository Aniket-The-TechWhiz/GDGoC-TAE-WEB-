import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Trash2, CircleCheck, MailOpen } from 'lucide-react';

interface Message {
    _id: string;
    fullName: string;
    email: string;
    subject: string;
    message: string;
    isRead: boolean;
    createdAt: string;
}

const MessageManagement: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const fetchMessages = async () => {
        setIsLoading(true);
        const adminKey = localStorage.getItem('x-admin-key');
        if (!adminKey) {
            navigate('/admin/login');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/messages', {
                headers: { 'x-admin-key': adminKey },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch messages');
            }
            const data = await response.json();
            setMessages(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleMarkAsRead = async (id: string) => {
        const adminKey = localStorage.getItem('x-admin-key');
        if (!adminKey) {
            console.error('Admin key not found. Please log in.');
            navigate('/admin/login');
            return;
        }
        try {
            const response = await fetch(`http://localhost:5000/api/messages/${id}/read`, {
                method: 'PATCH',
                headers: { 'x-admin-key': adminKey },
            });
            if (response.ok) {
                fetchMessages();
            } else {
                const errorData = await response.json();
                console.error(`Error marking message as read: ${errorData.message}`);
            }
        } catch (err) {
            console.error('An unexpected error occurred while marking message as read.');
        }
    };

    const handleDelete = async (id: string) => {
        const adminKey = localStorage.getItem('x-admin-key');
        if (!adminKey) {
            console.error('Admin key not found. Please log in.');
            navigate('/admin/login');
            return;
        }
        if (!window.confirm('Are you sure you want to delete this message?')) return;

        try {
            const response = await fetch(`http://localhost:5000/api/messages/${id}`, {
                method: 'DELETE',
                headers: { 'x-admin-key': adminKey },
            });
            if (response.status === 204) {
                fetchMessages();
            } else {
                const errorData = await response.json();
                console.error(`Error deleting message: ${errorData.message}`);
            }
        } catch (err) {
            console.error('An unexpected error occurred while deleting the message.');
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    if (isLoading) return <div>Loading messages...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="messages-container">
            <div className="admin-main-content">
                <button onClick={() => navigate(-1)} className="back-button">
                    &lt; Go Back
                </button>
                <h1 className="text-2xl font-bold mb-4 flex items-center">
                    <Bell className="inline mr-2 text-yellow-500" /> Messages
                </h1>
                {messages.length === 0 ? (
                    <p className="text-gray-500">No new messages.</p>
                ) : (
                    <div className="space-y-4">
                        {messages.map((msg) => (
                            <div key={msg._id} className={`message-item p-4 rounded-lg border border-gray-200 transition-colors ${msg.isRead ? 'bg-gray-100' : 'bg-green-50'}`}>
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex flex-col">
                                        <div className="font-semibold text-gray-900">{msg.subject}</div>
                                        <div className="text-sm text-gray-500">{msg.fullName} ({msg.email})</div>
                                    </div>
                                    <div className="flex gap-2">
                                        {!msg.isRead ? (
                                            <button onClick={() => handleMarkAsRead(msg._id)} title="Mark as Read" className="text-green-500 hover:text-green-700 p-1">
                                                <CircleCheck size={20} />
                                            </button>
                                        ) : (
                                            <button onClick={() => handleMarkAsRead(msg._id)} title="Mark as Unread" className="text-gray-500 hover:text-gray-700 p-1">
                                                <MailOpen size={20} />
                                            </button>
                                        )}
                                        <button onClick={() => handleDelete(msg._id)} title="Delete" className="text-red-500 hover:text-red-700 p-1">
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                </div>
                                <p className="text-gray-700">{msg.message}</p>
                                <div className="text-xs text-gray-400 mt-2">
                                    Received: {new Date(msg.createdAt).toLocaleString()}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MessageManagement;