import React from 'react';
import { Alert, Space } from 'antd';

export const AlerteP = () => (
    <Space
        direction="vertical"
        style={{
            width: '50%',
        }}
    >
        <Alert
            message="Your password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
            type="error"
            // closable
        />
    </Space>
);
