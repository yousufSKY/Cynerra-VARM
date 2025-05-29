import { useState, useEffect } from 'react';
import { onAuthStateChange, type User } from '@/lib/auth';

interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      setUser(user);
      // In a real app, you would fetch notifications from your backend here
      if (user) {
        setNotifications([
          {
            id: '1',
            title: 'New Vulnerability Detected',
            message: 'High severity vulnerability detected in your system.',
            timestamp: new Date(),
            read: false
          },
          {
            id: '2',
            title: 'Scan Complete',
            message: 'Weekly security scan has been completed.',
            timestamp: new Date(Date.now() - 3600000), // 1 hour ago
            read: false
          }
        ]);
      } else {
        setNotifications([]);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    setUnreadCount(notifications.filter(n => !n.read).length);
  }, [notifications]);

  const markAsRead = (notificationId: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === notificationId ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  return {
    user,
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead
  };
}