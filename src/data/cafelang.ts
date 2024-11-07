import cafeShopImage1 from '../assets/img/cafeshop1.png';
import cafeShopImage2 from '../assets/img/cafeshop2.png';


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
        content: 'Cô lê thị minh , 52 tuổi , quê ở Quy Nhơn - Bình Định ,\n' +
            '                                    hiện cô và chồng mình đã bán cafe được 7 năm .\n' +
            '                                    Cô chủ yếu bán cho khách quen , khách gần nhà ...'
    },
    {
        id: 2,
        image: cafeShopImage2,
        address: 'Địa chỉ : 54 Đống Đa',
        content: 'Cô lê thị minh , 52 tuổi , quê ở Quy Nhơn - Bình Định ,\n' +
            '                                    hiện cô và chồng mình đã bán cafe được 7 năm .\n' +
            '                                    Cô chủ yếu bán cho khách quen , khách gần nhà ...'
    },
    {
        id: 3,
        image: cafeShopImage2,
        address: 'Địa chỉ : 54 Đống Đa',
        content: 'Cô lê thị minh , 52 tuổi , quê ở Quy Nhơn - Bình Định ,\n' +
            '                                    hiện cô và chồng mình đã bán cafe được 7 năm .\n' +
            '                                    Cô chủ yếu bán cho khách quen , khách gần nhà ...'
    }
]