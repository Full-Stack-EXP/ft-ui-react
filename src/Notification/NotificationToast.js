'use client';

import React, { useEffect } from 'react';
import { useNotification } from './NotificationContext';
import { FaCheck, FaExclamationTriangle, FaInfoCircle, FaQuestionCircle, FaTimes } from 'react-icons/fa';

export default function NotificationToast() {
    const { notification, hideNotification } = useNotification();

    useEffect(() => {
        if (notification && notification.isActive && notification.type !== 'confirm') {
            const timer = setTimeout(hideNotification, notification.duration);
            return () => clearTimeout(timer);
        }
    }, [notification, hideNotification]);

    if (!notification || !notification.isActive) return null;

    const colors = {
        success: '#28a745',
        error: '#dc3545',
        confirm: '#ffc107',
        info: '#007bff',
        bg: 'var(--content-bg, #ffffff)', 
        text: 'var(--text-color, #333333)'
    };

    let icon, iconColor, boxShadow;
    switch (notification.type) {
        case 'success':
            icon = <FaCheck />;
            iconColor = colors.success;
            boxShadow = '0 5px 15px rgba(40, 167, 69, 0.4)';
            break;
        case 'error':
            icon = <FaExclamationTriangle />;
            iconColor = colors.error;
            boxShadow = '0 5px 15px rgba(220, 53, 69, 0.4)';
            break;
        case 'confirm':
            icon = <FaQuestionCircle />;
            iconColor = colors.confirm;
            boxShadow = '0 5px 15px rgba(255, 193, 7, 0.4)';
            break;
        case 'info':
        default:
            icon = <FaInfoCircle />;
            iconColor = colors.info;
            boxShadow = '0 5px 15px rgba(0, 123, 255, 0.4)';
            break;
    }

    const styles = {
        toast: {
            position: 'fixed',
            bottom: notification.type === 'confirm' ? '50%' : '20px',
            right: '20px',
            maxWidth: notification.type === 'confirm' ? '500px' : '400px',
            padding: '1rem',
            borderRadius: '8px',
            backgroundColor: colors.bg, 
            color: colors.text,
            boxShadow: boxShadow,
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            border: `1px solid ${iconColor}`,
            fontFamily: 'system-ui, sans-serif',
            transform: notification.type === 'confirm' ? 'translateY(50%)' : 'none',
            transition: 'background-color 0.3s, color 0.3s', 
        },
        content: { display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' },
        message: { margin: 0, fontWeight: 500, flexGrow: 1 },
        closeBtn: { 
            background: 'none', 
            border: 'none', 
            color: 'var(--text-color-muted, #6c757d)', 
            cursor: 'pointer', 
            fontSize: '1.2rem', 
            padding: 0 
        },
        actions: { display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' },
        
        btnConfirm: {
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            padding: '0.5rem 1rem', 
            borderRadius: '4px', 
            cursor: 'pointer', 
            fontWeight: '600'
        },
        
        btnCancel: {
            backgroundColor: colors.error,
            color: 'white', 
            border: 'none', 
            padding: '0.5rem 1rem', 
            borderRadius: '4px', 
            cursor: 'pointer', 
            fontWeight: '600'
        }
    };

    return (
        <div style={styles.toast}>
            <div style={styles.content}>
                <div style={{ color: iconColor, fontSize: '1.5rem', lineHeight: '1' }}>{icon}</div>
                <p style={styles.message}>{notification.message}</p>
                {notification.type !== 'confirm' && (
                    <button onClick={hideNotification} style={styles.closeBtn}>
                        <FaTimes />
                    </button>
                )}
            </div>
            
            {notification.type === 'confirm' && (
                <div style={styles.actions}>
                    <button style={styles.btnConfirm} onClick={notification.onConfirm}>Confirmar</button>
                    <button style={styles.btnCancel} onClick={hideNotification}>Cancelar</button>
                </div>
            )}
        </div>
    );
}