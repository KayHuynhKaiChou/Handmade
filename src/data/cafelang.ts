import cafeShopImage1 from '../assets/img/cafeshop1.png';
import cafeShopImage2 from '../assets/img/cafeshop2.png';
import cafeShopImage3 from '../assets/img/cafeshop3.png';

export interface CafeShop {
    id: number;
    image: string;
    address: string;
    content: string;
}

export const cafeshops : CafeShop[] = [
    {
        id: 1,
        image: cafeShopImage1,
        address: 'Địa chỉ : 54 Đống Đa',
        content: 'Cô Lê Thị Minh , 52 tuổi , quê ở Quy Nhơn - Bình Định ,\n' +
            '                                    hiện cô và chồng mình đã bán cafe được 7 năm .\n' +
            '                                    Dù có lượng khách ổn định mỗi ngày, cô gặp phải khó khăn trong việc duy trì chất lượng đồ uống khi phải di chuyển liên tục và không có nguồn nước sạch cố định.'
    },
    {
        id: 2,
        image: cafeShopImage2,
        address: 'Địa chỉ : 329 Trần Hưng Đạo',
        content: 'Cô Nguyễn Thị Hạnh , 48 tuổi , quê ở An Nhơn - Bình Định ,\n' +
            '                                    cô lấy chồng ở quy nhơn và cùng chồng bán cafe được 3 năm sau khi 2 vợ chồng về hưu .\n' +
            '                                    Việc tìm được điểm bán phù hợp vào những giờ cao điểm cũng là một thử thách lớn, khiến Hạnh phải luôn theo dõi các địa điểm tiềm năng và thích ứng nhanh với sự thay đổi của thị trường.'
    },
    {
        id: 3,
        image: cafeShopImage3,
        address: 'Địa chỉ : 58 Đống Đa',
        content: 'Cô Trần Hương Lan , 43 tuổi , quê ở Quy Nhơn - Bình Định ,\n' +
            '                                    Lan sở hữu một xe cafe di động phục vụ cho khách hàng vào buổi sáng. \n' +
            '                                    Khó khăn lớn nhất của cô là việc quảng bá xe cafe của mình trong một thị trường cạnh tranh gay gắt, với nhiều lựa chọn từ các quán cafe truyền thống. Cô cũng gặp khó khăn trong việc quản lý chi phí, đặc biệt là chi phí nhiên liệu và bảo dưỡng xe.'
    }
]