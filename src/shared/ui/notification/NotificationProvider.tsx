import React, { createContext, useContext, ReactNode } from 'react';
import { notification } from 'antd';

export type NotificationType = 'success' | 'error';

type NotifyFn = (type: NotificationType, title: string, description?: string) => void;

interface NotificationContextValue {
  notify: NotifyFn;
}

const NotificationContext = createContext<NotificationContextValue | null>(null);

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [api, contextHolder] = notification.useNotification();

  const notify: NotifyFn = (type, title, description) => {
    api[type]({
      message: title,
      description,
    });
  };

  return (
    <NotificationContext.Provider value={{ notify }}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const ctx = useContext(NotificationContext);

  if (!ctx) {
    throw new Error('useNotifications must be used inside NotificationProvider');
  }

  return ctx;
};
