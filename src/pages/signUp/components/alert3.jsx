import React from 'react';
import { Alert, Space } from 'antd';
export const AlerteA = () => (
    <Space
        
        direction="vertical"
        style={{
            width: '50%',
            
        }}
    >
        <Alert 
        message="Please fill in all the required fields before submitting the form." 
        type="error" 
        // closable
        />
    </Space>
);
