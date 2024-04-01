import React from 'react';
import { Alert, Space } from 'antd';
export const AlerteE = () => (
    <Space
        
        direction="vertical"
        style={{
            width: '50%',
            
        }}
    >
        <Alert 
        message="Password is not correct" 
        type="error" 
        // closable
        />
    </Space>
);
