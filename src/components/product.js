import { useState } from "react";
import "./product.css";

const Product = ({ name, price, picture}) => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    return (
        <article className="product__card">
            <div className="product__circle"></div>

            <img src={picture} alt="" className="product__img" />

            <h3 className="product__title">{name}</h3>
            <span className="product__price">{price}</span>

            <button className="button--flex product__button" onClick={toggleModal}>
                <i className="ri-shopping-bag-line"></i>
            </button>
            {modal && (
                        <div className="modal">
                            <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal-content">
                                <h2>Thông tin chi tiết</h2>
                                <p>Tên sầu riêng: {name}.</p>
                                <p>Tên đơn vị sản xuất, kinh doanh: Vinamit.</p>
                                <p>Địa chỉ đơn vị sản xuất: Lâm Đồng.</p>
                                <p>Mã truy vết sản phẩm: XYZ9.049.1101.</p>
                                <p>Thời gian sản xuất: 01/01/2023</p>
                                <p>Giá sản phẩm: {price}</p>
                                <button className="close-modal" onClick={toggleModal}>
                                    x
                                </button>
                            </div>
                        </div>
                    )}
        </article>
        
    )
}
export default Product;