import "./header.css";
export default function HeaderComponent() {

  return (
    <div id="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-md-2 col-sm-2">
            <div className="logo-wrap">
              <div className="logo-inner">
                <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/451806854_3715591738679082_8925721307352280345_n.png?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=EKaFdj98LPgQ7kNvgHOb40O&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEO2C9FkadyrdIF3Ctwq9fE5H-x35-ow_Anh1yUNfB81Q&oe=66D3008D" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 header-ttl neons col-sm-5">Cà phê làng </div>
          <div className="col-lg-5 col-md-4 d-flex">
            {/* <div 
              className="header_item text-center"
              onClick={() => navigate('/')}
            >
              Trang chủ
            </div>
            <div 
              className="header_item text-center"
              onClick={() => navigate('/custom')}
            >
              Sáng tạo
            </div> */}
          </div>
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
