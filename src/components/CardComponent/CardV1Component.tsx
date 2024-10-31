import React from 'react';
import {Button, Card} from "antd";
import Title from "antd/es/typography/Title";

function CardV1Component({ onHandleClickBtn } : { onHandleClickBtn : () => void }) {
    return (
        <Card title={<Title level={2}>Card title</Title>} bordered={false} style={{ width: 400 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <Button onClick={onHandleClickBtn} style={{ width: "100%" }} type="primary">buy now</Button>
        </Card>
    );
}

export default CardV1Component;