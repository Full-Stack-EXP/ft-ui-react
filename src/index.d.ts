import * as React from 'react';

export const NotificationProvider: React.FC<{ children: React.ReactNode }>;

export const NotificationToast: React.FC;

export function useNotification(): {
    showNotification: (params: { message: string, type?: 'success' | 'error' | 'info' | 'confirm', duration?: number }) => void;
    showConfirmation: (params: { message: string, onConfirm: () => void, onCancel?: () => void }) => void;
    hideNotification: () => void;
    notification: any;
};

export const KpiCard: React.FC<{
    title: string;
    value: string | number;
    icon: React.ReactNode;
    color?: string;
    helpText?: string;
}>;