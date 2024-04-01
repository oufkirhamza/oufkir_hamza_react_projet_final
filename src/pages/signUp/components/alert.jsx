import React from 'react';
import { Alert, Space } from 'antd';
export const Alerte = () => (
    <Space
        
        direction="vertical"
        style={{
            width: '50%',
            
        }}
    >
        <Alert 
        message="Invalid email format. Please enter a valid email address" 
        type="error" 
        // closable
        />
    </Space>
);
