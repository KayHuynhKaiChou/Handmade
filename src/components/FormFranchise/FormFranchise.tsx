import './FormFranchise.css'
import {Button, Form, Input} from "antd";
import TextArea from "antd/es/input/TextArea";
import ContactSvg from '../../assets/icons/contact.svg'
import {TiPhoneOutline} from "react-icons/ti";
import {MdEmail} from "react-icons/md";
import emailjs from '@emailjs/browser';
import {toast} from "react-toastify";
import {toastMSGObject} from "../../utils/utils.ts";

type FieldType = {
    fullname: string;
    phone: string;
    email: string;
    business_area?: string;
    note?: string;
};

const YOUR_SERVICE_ID = 'service_k9u6qqi';
const YOUR_SERVICE_ID_1 = 'service_io8weqb';
const YOUR_TEMPLATE_ID = 'template_jshpu1a';
const PUBLIC_KEY = 'nL8tErQcYG_-K2ijP';

function FormFranchise() {

    const handleSendEmail = (values: FieldType) => {
        const templateParams = {
            ...values,
            subject: `Thông tin liên hệ từ khách hàng ${values.fullname}`,
            email_from: values.email,
            fullname_to: values.fullname
        }
        emailjs
            .send(
                YOUR_SERVICE_ID_1,        // Thay bằng Service ID từ EmailJS
                YOUR_TEMPLATE_ID,       // Thay bằng Template ID từ EmailJS
                templateParams,
                PUBLIC_KEY
            )
            .then(
                (response) => {
                    toast.success('Gửi thông tin thành công!', toastMSGObject());
                    console.log(response)
                },
                (error) => {
                    toast.success('Gửi email thất bại!', toastMSGObject());
                    console.log(error)
                }
            );
    }

    return (
        <div id="FormFranchise">
            <div className="form-franchise-wrap">
                <div className="franchise-ttl">
                    <span>LIÊN HỆ TƯ VẤN <br/> HỢP TÁC KINH DOANH</span>
                </div>
                <div className="franchise-sub-ttl">Cafe làng cam kết bảo mật 100% thông tin của Anh/ Chị</div>

                <div className="form-franchise">
                    <Form
                        name="basic"
                        labelCol={{ span: 0 }}
                        wrapperCol={{ span: 24 }}
                        onFinish={handleSendEmail}
                        autoComplete="off"
                    >
                        <Form.Item<FieldType>
                            label={null}
                            name="fullname"
                            rules={[{ required: true, message: 'Vui lòng nhập họ và tên !' }]}
                        >
                            <Input placeholder={'Họ và tên (*)'} size="large"/>
                        </Form.Item>

                        <Form.Item<FieldType>
                            label={null}
                            name="phone"
                            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại !' }]}
                        >
                            <Input placeholder={'Số điện thoại (*)'} size="large"/>
                        </Form.Item>

                        <Form.Item<FieldType>
                            label={null}
                            name="email"
                            rules={[{ required: true, message: 'Vui lòng nhập email !' }]}
                        >
                            <Input placeholder={'Email (*)'} size="large"/>
                        </Form.Item>

                        <Form.Item<FieldType>
                            label={null}
                            name="business_area"
                        >
                            <Input placeholder={'Khu vực kinh doanh'} size="large"/>
                        </Form.Item>

                        <Form.Item<FieldType>
                            label={null}
                            name="note"
                        >
                            <TextArea rows={4} placeholder="Ghi chú" />
                        </Form.Item>
                        <div className="btn-send-request">
                            <Button type="primary" htmlType="submit" size="large">
                                gửi thông tin
                            </Button>
                        </div>
                    </Form>
                </div>

                <div className="information-contact">
                    <div className="contact-card">
                        <img src={ContactSvg}/>
                        <div className="name">Nguyễn Huỳnh Gia Hân</div>
                        <div className="contact-info">
                            <TiPhoneOutline/>
                            0988798112
                        </div>
                        <div className="contact-info">
                            <MdEmail/>
                            hangn123@gmail.com
                        </div>
                    </div>
                    <div className="contact-card">
                        <img src={ContactSvg}/>
                        <div className="name">Huỳnh Gia Khôi</div>
                        <div className="contact-info">
                            <TiPhoneOutline/>
                            0935187859
                        </div>
                        <div className="contact-info">
                            <MdEmail/>
                            huynhgiaquy123@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormFranchise;