import "./header.css";
export default function HeaderComponent() {

  return (
    <div id="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-md-2 col-sm-2">
            <div className="logo-wrap">
              <div className="logo-inner">
                <img src="https://down-tx-vn.img.susercontent.com/5e1a7cc91f019850dee5b77859f79972_tn.webp" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 header-ttl neons col-sm-5">Tiệm Tháng Tám </div>
          {/* <div className="col-md-2 header_item text-center">
            Trang chủ
          </div>
          <div className="col-md-2 header_item text-center">
            Liên hệ
          </div>
          <div className="col-md-3 header_item text-center">
            Sản phẩm tùy chỉnh
          </div> */}
          <div className="col-lg-4 col-md-2 col-sm-2"></div>
          <div className="col-lg-3 col-md-3 icon-connect-wrap col-sm-3">
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
    </div>
  );
}
