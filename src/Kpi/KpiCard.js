'use client';

import React from 'react';

export default function KpiCard({ title, value, icon, color = '#007bff', helpText }) {
    
    const styles = {
        card: {
            backgroundColor: 'var(--content-bg, #ffffff)',
            color: 'var(--text-color, #333333)',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            border: '1px solid var(--border-color, rgba(0,0,0,0.05))',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            minWidth: '250px',
        },
        iconWrapper: {
            backgroundColor: `${color}25`, 
            color: color,
            width: '60px',
            height: '60px',
            borderRadius: '50%', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8rem',
            flexShrink: 0,
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
        },
        title: {
            margin: 0,
            fontSize: '0.9rem',
            color: 'var(--text-color-muted, #6c757d)', 
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
        },
        value: {
            margin: 0,
            fontSize: '1.8rem',
            fontWeight: '700',
            color: 'var(--text-color, #333)', 
        },
        helpText: {
            fontSize: '0.75rem',
            color: color,
            marginTop: '0.25rem',
            fontWeight: 500
        }
    };

    return (
        <div 
            style={styles.card} 
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
            }}
        >
            <div style={styles.iconWrapper}>
                {icon}
            </div>
            <div style={styles.content}>
                <h3 style={styles.title}>{title}</h3>
                <p style={styles.value}>{value}</p>
                {helpText && <span style={styles.helpText}>{helpText}</span>}
            </div>
        </div>
    );
}