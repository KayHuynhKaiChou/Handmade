import { Button, Col, Divider, Form, Input,  Row } from 'antd';
import './FormPackageBrandComponent.css'
import Title from 'antd/es/typography/Title';

type FieldTypeCustom = {
    email: string;
    phone: string;
    image: string;
    quantity: string;
    
};

const bankId = 'tpbank';
const accountNo = '00005864322';
const template = 'compact2';
const content = 'nop%20tien%20mua%20thuong%20hieu%5C';
const accountName = 'HUYNH GIA KHOI';

export default function FormPackageBrandComponent({ moneyBank } : { moneyBank : number }) {
        // fetch(
        //     'https://api.openai.com/v1/images/generations',
        //     {
        //         method: 'POST',
        //         headers: {
        //             "Content-Type": "application/json",
        //             "Authorization": `Bearer ${OPENAI_API_KEY}`,
        //         },
        //         body: JSON.stringify({
        //             model: "dall-e-2",
        //             prompt: values.text,
        //             n: 1,
        //             size: "1024x1024"
        //         })
        //     }
        // )
        //     .then(res => res.json())
        //     .then(res => {
        //         setImgUrl(res.data[0].url)
        //     })
    const linkQR = `https://img.vietqr.io/image/${bankId}-${accountNo}-${template}.jpg?amount=${moneyBank}&addInfo=${content}&accountName=${accountName}`;

    return (
        <div className='container custom-wrapper'>
            <Form
                className='form-generate-img'
                name="basic"
                layout='vertical'
                // labelCol={{ span: 6 }}
                // wrapperCol={{ span: 18 }}
                //onFinish={handleSubmitForm}
                autoComplete="off"
            >
                <Row gutter={42}>
                    <Col span={24}>
                        <Divider 
                            style={{borderColor:"#424242"}} 
                            orientation="center"
                        >
                            <Title level={4}>Thông tin chi tiết gói</Title>
                        </Divider>
                    </Col>
                    <Col span={12}>
                        {/*<Form.Item<FieldTypeImage>*/}
                        {/*    label="Loại túi jean có sẵn"*/}
                        {/*    name="text"*/}
                        {/*    rules={[{ required: true, message: 'Please input your request!' }]}*/}
                        {/*>*/}
                        {/*    <Select placeholder="Chọn 1 loại có sẵn">*/}
                        {/*        {typesHandmade.map(op => (*/}
                        {/*            <Option value={op.value + ''}>{op.label}</Option>*/}
                        {/*        ))}*/}
                        {/*    </Select>*/}
                        {/*</Form.Item>*/}
                    </Col>
                    <Col span={12}>
                    </Col>
                </Row>
            </Form>
            <Form
                className='form-generate-img'
                name="basic"
                layout='vertical'
                // labelCol={{ span: 6 }}
                // wrapperCol={{ span: 18 }}
                //onFinish={handleSubmitForm}
                autoComplete="off"
            >
                <Row gutter={42}>
                    <Col span={24}>
                        <Divider 
                            style={{borderColor:"#424242"}} 
                            orientation="center"
                        >
                            <Title level={4}>Thông tin liên lạc khách hàng</Title>
                        </Divider>
                    </Col>
                    <Col span={12}>
                        <Form.Item<FieldTypeCustom>
                            label="Email"
                            name="email"
                            
                            rules={[{ required: true, message: 'Please input your request!' }]}
                        >
                            <Input placeholder='abc@gmail.com'/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item<FieldTypeCustom>
                            label="Số điện thoại"
                            name="phone"
                            rules={[{ required: true, message: 'Please input your request!' }]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={42}>
                    <Col span={24}>
                        <Divider
                            style={{borderColor:"#424242"}}
                            orientation="center"
                        >
                            <Title level={4}>Thông tin thanh toán</Title>
                        </Divider>
                    </Col>
                    <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={linkQR} />
                    </Col>
                </Row>
            </Form>
            <div style={{display:'flex', justifyContent:'center', marginTop:'40px'}} >
                <Button type="primary" htmlType="submit" style={{width:'200px'}}>
                    Gửi yêu cầu
                </Button>
            </div>
        </div>
    )
}
