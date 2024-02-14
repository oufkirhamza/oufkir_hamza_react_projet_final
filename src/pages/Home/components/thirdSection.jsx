import { Tabs } from 'antd';
import React from 'react';
import kodas from '../../../assets/img/ID9329_22_model.jpg'

export const ThirdSection = () => {


    return (
        <div>
            <Tabs
            // onClick={}
                defaultActiveKey="1"
                centered
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: `Tab ${id}`,
                        key: id,
                        // children: `Content of Tab Pane ${id}`,
                    };
                })}
            />
            <div>
                <img src={kodas} alt="" />
            </div>
        </div>
    );
};
