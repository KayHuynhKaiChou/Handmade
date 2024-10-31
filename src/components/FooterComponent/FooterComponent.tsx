import "./Footer.css";
export default function FooterComponent() {
  return (
    <div id="FooterComponent">
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="company">
                <br/>
                <h4>NHÓM KHỞI NGHIỆP CPL</h4>
                <div>
                  Địa chỉ: FPT University, Khu đô thị mới, Thành phố Qui Nhơn, Bình Định
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="about">
                <br/>
                <h4>VỀ CÀ PHÊ LÀNG</h4>
                <div>
                  Chúng tôi tại CÀ PHÊ LÀNG cam kết cung cấp sự sáng tạo và chất lượng trong từng sản phẩm handmade, giúp khách hàng thể hiện phong cách cá nhân và tự tin.
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="contact">
                <br/>
                <h4>LIÊN HỆ</h4>
                <div className="row mail-icon">
                  <div className="col-md-1 col-sm-1">
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                  <div className="col-md-11 col-sm-11">
                    Email: caphelang@gmail.com
                  </div>
                </div>
                <div className="row phone">
                  <div className="col-md-1 col-sm-1">
                    <i className="fa-solid fa-phone fa-shake"></i>
                  </div>
                  <div className="col-md-11 col-sm-11">Phone: 0984298725</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <br/>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.32986872797!2d109.17271307487015!3d13.819220186579695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f14c59b5e713f%3A0xec90efbee0c9d2b9!2zNTAgTmd1eeG7hW4gSHXhu4csIFRULiBUdXkgUGjGsOG7m2MsIFR1eSBQaMaw4bubYywgQsOsbmggxJDhu4tuaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1699259709205!5m2!1sen!2s"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          <hr style={{ width: "100%", color: "#fff", fontSize: "5px" }} />
        </div>
        <div className="row connect">
          <h4>Kết nối với chúng tôi</h4>
          <div className="icon-connect">
            <i 
              className="fa-brands fa-facebook"
              onClick={() => window.open('https://www.facebook.com/tiemthang8' ,'_blank')}
            ></i>
            <i 
              className="fa-brands fa-tiktok"
              onClick={() => window.open('https://www.facebook.com/tiemthang8' ,'_blank')}
            ></i>
            <i 
              className="fa-brands fa-instagram"
              onClick={() => window.open('https://www.instagram.com/tiem_thang_8?fbclid=IwZXh0bgNhZW0CMTAAAR1gSj-HMAh0l9_-lTo0gCBjHCl-0UL-PDYE5kQi0PXRN3wz7hPX91q5Zgg_aem_QpW9eXAiT2PyxOmWCHhgog' ,'_blank')}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
