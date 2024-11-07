import React from 'react';
import {Button, Card} from "antd";
import Title from "antd/es/typography/Title";
import Meta from "antd/lib/card/Meta";
import {CafeShop} from "../../data/cafelang.ts";

function CardV1Component({ version = 1, inforCafe, onHandleClickBtn } : { version?: number, inforCafe: CafeShop, onHandleClickBtn : () => void }) {
    return (
        <>
            {version === 1 ? (
                <Card title={<Title level={2}>Card title</Title>} bordered={false} style={{ width: 400 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <Button onClick={onHandleClickBtn} style={{ width: "100%" }} type="primary">buy now</Button>
                </Card>
            ) : (
                <Card
                    hoverable
                    style={{ width: 400 }}
                    cover={<img alt="example" src={inforCafe.image} />}
                >
                    <Meta
                        title="Thông tin người chủ bán cafe"
                        description={(
                            <div>
                                <p>{inforCafe.address}</p>
                                <p>{inforCafe.content}</p>
                            </div>
                        )}
                    />
                </Card>
            )}
        </>
    );
}

export default CardV1Component;