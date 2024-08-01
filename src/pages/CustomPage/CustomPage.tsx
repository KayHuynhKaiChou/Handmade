import { Button, Checkbox, Col, ColorPicker, Divider, Form, GetProp, Image, Input, InputNumber, Radio, Row, Select, Space, Upload, UploadProps } from 'antd';
import { useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import './CustomPage.css'
import Title from 'antd/es/typography/Title';
import { optionsNameLogo, typesHandmade, typesSize } from '../../data/handmade';
import { Option } from 'antd/es/mentions';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import RadioHM from '../../common/RadioHM';

type FieldTypeImage = {
    text: string;
};

type FieldTypeCustom = {
    email: string;
    phone: string;
    image: string;
    quantity: string;
    
};

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

export default function CustomPage() {
    const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY
    const [imgUrl , setImgUrl] = useState('')
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
    }

    const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );

    return (
        <div className='container custom-wrapper'>
            <Form
                className='form-generate-img'
                name="basic"
                layout='vertical'
                // labelCol={{ span: 6 }}
                // wrapperCol={{ span: 18 }}
                onFinish={handleSubmitForm}
                autoComplete="off"
            >
                <Row gutter={42}>
                    <Col span={24}>
                        <Divider 
                            style={{borderColor:"#424242"}} 
                            orientation="center"
                        >
                            <Title level={4}>Thông tin túi jean tùy chọn</Title>
                        </Divider>
                    </Col>
                    <Col span={12}>
                        <Form.Item<FieldTypeImage>
                            label="Loại túi jean có sẵn"
                            name="text"
                            rules={[{ required: true, message: 'Please input your request!' }]}
                        >
                            <Select placeholder="Chọn 1 loại có sẵn">
                                {typesHandmade.map(op => (
                                    <Option value={op.value + ''}>{op.label}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item<FieldTypeImage>
                            label="Kích cỡ (cm) : chiều cao x chiều rộng x độ dày"
                            name="text"
                            rules={[{ required: true, message: 'Please input your request!' }]}
                        >
                            <Select placeholder="Chọn kích cỡ có sẵn">
                                {typesSize.map(op => (
                                    <Option value={op.value + ''}>{op.label}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify={'space-between'} style={{margin: "30px 0px"}}>
                    <Col span={6}>
                        <Form.Item<FieldTypeImage>
                            label="Thực hiện gán tên, logo vào túi jean"
                            name="text"
                            rules={[{ required: true, message: 'Please input your request!' }]}
                        >
                            {optionsNameLogo.map((op, i) => (
                                <RadioHM
                                    id={i + ''}
                                    label={op.label}
                                    name={op.label}
                                    checked={op.value === 1}
                                    onChange={() => console.log()}
                                />
                            ))}
                        </Form.Item>
                    </Col>
                    <Col span={10}>
                        <Form.Item<FieldTypeImage>
                            label="Tên tự đặt"
                            name="text"
                            rules={[{ required: true, message: 'Please input your request!' }]}
                        >
                           <Input 
                                placeholder='1 cái tên bạn cảm thấy ý nghĩa'
                           />
                        </Form.Item>
                    </Col>
                    <Col span={2}>
                        <Form.Item<FieldTypeImage>
                            label="Logo"
                            name="text"
                            rules={[{ required: true, message: 'Please input your request!' }]}
                        >
                           <Upload
                                name="avatar"
                                listType="picture-circle"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                                // beforeUpload={beforeUpload}
                                // onChange={handleChange}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={160}>
                    <Col span={4}>
                        <Form.Item<FieldTypeImage>
                            label="Màu sắc"
                            name="text"
                            rules={[{ required: true, message: 'Please input your request!' }]}
                        >
                           <ColorPicker defaultValue="#1677ff" />
                        </Form.Item>
                        <Form.Item<FieldTypeImage>
                            label="Số lượng"
                            name="text"
                            rules={[{ required: true, message: 'Please input your request!' }]}
                        >
                           <Input />
                        </Form.Item>
                    </Col>
                    <Col span={20}>
                        <Form.Item<FieldTypeImage>
                            label="Yêu cầu bổ sung thêm (nếu có)"
                            name="text"
                            rules={[{ required: true, message: 'Please input your request!' }]}
                        >
                            <TextArea 
                                rows={7}
                                placeholder='bạn sử dụng với mục đích gì , ví dụ: sử dụng tặng thầy cô nhân ngày 20/11 ,...'
                            />
                        </Form.Item>                    
                    </Col>
                </Row>
                <Form.Item className='btn-pattern-wrap'>
                    <Button type="primary" htmlType="submit">
                        Lấy mẫu
                    </Button>
                </Form.Item>
            </Form>
            <Form
                className='form-generate-img'
                name="basic"
                layout='vertical'
                // labelCol={{ span: 6 }}
                // wrapperCol={{ span: 18 }}
                onFinish={handleSubmitForm}
                autoComplete="off"
            >
                <Title level={5}>3 mẫu hình ảnh (vui lòng chọn 1 mẫu bên dưới)</Title>
                <div className="image-generate">
                    <Image
                        className='img-item'
                        src='https://scontent.fsgn2-8.fna.fbcdn.net/v/t1.15752-9/452841942_906248061519063_1167699046203536972_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_ohc=NmrgbeJAf_sQ7kNvgEGnrfm&_nc_ht=scontent.fsgn2-8.fna&oh=03_Q7cD1QHUXxLr9ap492N39orJBDaMaAmCDMLyukNuV06ZYnRVqg&oe=66D2F870'
                    />
                    <Image
                    className='img-item'
                        src='https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.15752-9/452906279_424297463969885_7951356330067123652_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_ohc=MNT5VjzUjVgQ7kNvgE9PiJR&_nc_ht=scontent.fsgn2-7.fna&oh=03_Q7cD1QEUkiNcL_ucS4ON2V_qCGVYPkGYD_CXTet00DXnIfh04g&oe=66D323F4'
                    />
                    <Image
                    className='img-item'
                        src='https://scontent.xx.fbcdn.net/v/t1.15752-9/451442460_2257404427945989_5013871884684780686_n.png?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=7fs4neXOUoYQ7kNvgFHRDVe&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&gid=ADoBTy7_G_FisBQc6ovEJRo&oh=03_Q7cD1QE6sk0phANi6mDpYY2x0QXYCrVD8Wh2vvJIW9psDI_LCA&oe=66D31DD2'
                    />
                </div>
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
                <Form.Item className='btn-pattern-wrap'>
                    <Button type="primary" htmlType="submit">
                        Gửi yêu cầu
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
