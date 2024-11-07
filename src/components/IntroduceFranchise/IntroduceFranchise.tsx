import CheckedIcon from '../../assets/icons/checked.svg'
import './IntroduceFranchise.css'
import introduceFranchise from '../../assets/img/introduceFranchise.png'

function IntroduceFranchise() {
    return (
        <div id="IntroduceFranchise">
            <div className="introduce-content-wrap">
                <div className="content-ttl">Tự tin khởi nghiệp cùng cafe làng</div>
                <div className="content-sub">
                    Với đội ngũ giàu kinh nghiệm trong lĩnh vực, đang vận hành hệ thống hơn 100 cửa hàng, chúng tôi tự tin giúp bạn xây dựng một cửa hàng thành công.
                </div>
                <div className="content-main">
                    <div className="cf-strength">
                        <img src={CheckedIcon} alt=""/>
                        <div className="cf-strength-content">Mô hình tinh gọn</div>
                    </div>
                    <div className="cf-strength">
                        <img src={CheckedIcon} alt=""/>
                        <div className="cf-strength-content">Chi phí tối ưu</div>
                    </div>
                    <div className="cf-strength">
                        <img src={CheckedIcon} alt=""/>
                        <div className="cf-strength-content">Triển khai nhanh chóng</div>
                    </div>
                    <div className="cf-strength">
                        <img src={CheckedIcon} alt=""/>
                        <div className="cf-strength-content">Vận hành hiệu quả</div>
                    </div>
                    <div className="cf-strength">
                        <img src={CheckedIcon} alt=""/>
                        <div className="cf-strength-content">Số liệu minh bạch</div>
                    </div>
                </div>
            </div>
            <div className="introduce-background">
                <img src={introduceFranchise} />
            </div>
        </div>
    );
}

export default IntroduceFranchise;