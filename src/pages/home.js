
import "./home.css";
import Product from "../components/product";

export default function Home() {
    return (
        <div>
            <header className="header" id="header">
                <nav className="nav container">
                    <a href="#" className="nav__logo">
                        <i className="nav__logo-icon"><img src="assets/img/durian.png" alt="" /></i> Durian Traceability
                    </a>

                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link active-link">Trang chủ</a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className="nav__link">Thông tin</a>
                            </li>
                            <li className="nav__item">
                                <a href="#products" className="nav__link">Sản phẩm</a>
                            </li>
                            <li className="nav__item">
                                <a href="#faqs" className="nav__link">Thắc mắc</a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className="nav__link">Liên hệ</a>
                            </li>
                        </ul>

                        <div className="nav__close" id="nav-close">
                            <i className="ri-close-line"></i>
                        </div>
                    </div>

                    <div className="nav__btns">
                        <i className="ri-moon-line change-theme" id="theme-button"></i>

                        <div className="nav__toggle" id="nav-toggle">
                            <i className="ri-menu-line"></i>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="main" />

            <section className="home " id="home">
                <div className="home__container container grid">
                    <img src="assets/img/home.png" alt="" className="home__img" />

                    <div className="home__data">
                        <h1 className="home__title">
                            Truy xuất nguồn gốc sầu riêng
                        </h1>
                        <p className="home__description">
                            Truy xuất nguồn gốc thực phẩm đang được phát triển và áp dụng rộng rãi trong ngành công nghiệp
                            thực phẩm để đảm bảo tính an toàn và chất lượng sản phẩm đến tay người tiêu dùng.
                        </p>
                        <a href="#about" className="button button--flex">
                            Khám phá <i className="ri-arrow-right-down-line button__icon"></i>
                        </a>
                    </div>


                </div>
            </section>


            <section className="about section container" id="about">
                <div className="about__container grid">
                    <img src="assets/img/about.png" alt="" className="about__img" />

                    <div className="about__data">
                        <h2 className="section__title about__title">
                            Tại sao nên sử dụng<br /> ứng dụng truy xuất nguồn gốc thực phẩm
                        </h2>

                        <p className="about__description">
                            Truy xuất nguồn gốc thực phẩm là quá trình tìm hiểu và theo dõi các thông tin liên quan đến quá
                            trình sản xuất, chế biến, vận chuyển, lưu trữ và phân phối của một sản phẩm thực phẩm đến tay
                            người tiêu dùng.
                        </p>

                        <div className="about__details">
                            <p className="about__details-description">
                                <i className="ri-checkbox-fill about__details-icon"></i>
                                Đảm bảo an toàn, chất lượng và độ tin cậy của sản phẩm.
                            </p>
                            <p className="about__details-description">
                                <i className="ri-checkbox-fill about__details-icon"></i>
                                Giảm thiểu rủi ro về sức khoẻ.
                            </p>
                            <p className="about__details-description">
                                <i className="ri-checkbox-fill about__details-icon"></i>
                                Tăng cường niềm tin người tiêu dùng vào sản phẩm.
                            </p>
                            <p className="about__details-description">
                                <i className="ri-checkbox-fill about__details-icon"></i>
                                Hoàn tiền 100% nếu có sai sót.
                            </p>
                        </div>

                        <a href="#" className="button--link button--flex">
                            Khám phá <i className="ri-arrow-right-down-line button__icon"></i>
                        </a>
                    </div>
                </div>
            </section>


            <section className="steps section container">
                <div className="steps__bg">
                    <h2 className="section__title-center steps__title">
                        Quy trình <br /> truy xuất
                    </h2>

                    <div className="steps__container grid">
                        <div className="steps__card">
                            <div className="steps__card-number">01</div>
                            <h3 className="steps__card-title">Chọn giống cây</h3>
                            <p className="steps__card-description">
                                Sầu riêng được trồng, chăm sóc và thu hoạch từ các trạng thái hoặc khu vực sản xuất đặc
                                biệt.
                            </p>
                        </div>

                        <div className="steps__card">
                            <div className="steps__card-number">02</div>
                            <h3 className="steps__card-title">Chế biến & đóng gói</h3>
                            <p className="steps__card-description">
                                Sầu riêng được vận chuyển đến các cơ sở chế biến để đóng gòi và bảo quản.
                            </p>
                        </div>

                        <div className="steps__card">
                            <div className="steps__card-number">03</div>
                            <h3 className="steps__card-title">Vận chuyển</h3>
                            <p className="steps__card-description">
                                Sầu riêng được vận chuyển đến các điểm bán và phân phối trên khắp quốc gia và thế giới.
                            </p>
                        </div>

                        <div className="steps__card">
                            <div className="steps__card-number">04</div>
                            <h3 className="steps__card-title">Bán & phân phối</h3>
                            <p className="steps__card-description">
                                Sầu riêng được bán và phân phối đến các siêu thị, chợ và cửa hàng tạp hoá trên toàn quốc và
                                thế giới.
                            </p>
                        </div>

                        <div className="steps__card">
                            <div className="steps__card-number">05</div>
                            <h3 className="steps__card-title">Mua hàng</h3>
                            <p className="steps__card-description">
                                Người tiêu dùng mua hàng từ các cửa hàng và siêu thị hoặc đặt hàng trực tuyến.
                            </p>
                        </div>

                        <div className="steps__card">
                            <div className="steps__card-number">06</div>
                            <h3 className="steps__card-title">Vận chuyển đến tay người dùng</h3>
                            <p className="steps__card-description">
                                Sản phẩm được vận chuyển đến tay người tiêu dùng thông qua các dịch vụ giao hàng hoặc được
                                lấy trực tiếp từ cửa hàng bán lẻ.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="product section container" id="products">
                <h2 className="section__title-center">
                    Một số sản phẩm của chúng tôi
                </h2>

                <p className="product__description">
                    Dưới đây là một số loại sầu riêng nổi tiếng và <br /> được đánh giá cao nhất tại Lâm Đồng.
                </p>

                <div className="product__container grid">

                    <Product name="Sầu Riêng Ri6" price="90.000 - 150.000 đồng/kg" picture="assets/img/product1.png"></Product>

                    <Product name="Sầu Riêng Thái" price="100.000 - 140.000 đồng/kg" picture="assets/img/product2.png"></Product>

                    <Product name="Sầu riêng Musang King" price="400.000 - 500.000 đồng/hộp 400g" picture="assets/img/product3.png"></Product>

                    <Product name="Sầu riêng ruột đỏ" price="86.000 - 200.000 đồng/kg" picture="assets/img/product4.png"></Product>

                    <Product name="Sầu riêng Cái Mơn" price="135.000 đồng/kg" picture="assets/img/product5.png"></Product>

                    <Product name="Sầu riêng khổ qua" price="120.000 - 130.000 đồng/kg" picture="assets/img/product6.png"></Product>
                </div>
            </section>


            <section className="questions section" id="faqs">
                <h2 className="section__title-center questions__title container">
                    Những câu hỏi thường gặp
                </h2>

                <div className="questions__container container grid">
                    <div className="questions__group">
                        <div className="questions__item">
                            <header className="questions__header">
                                <i className="ri-add-line questions__icon"></i>
                                <h3 className="questions__item-title">
                                    Làm sao để thiết lập hệ thống truy xuất nguồn gốc?
                                </h3>
                            </header>

                            <div className="questions__content">
                                <p className="questions__description">
                                    Hệ thống truy xuất nguồn gốc sẽ được đưa vào quy trình sản xuất của doanh nghiệp, từ đó
                                    các mắt xích sẽ giám sát và có trách nhiệm với sản phẩm của mình. Nếu xảy ra lỗi ở công
                                    đoạn sản xuất doanh nghiệp sẽ yêu cầu sửa lỗi kịp thời trước khi bán sản phẩm ra thị
                                    trường.
                                </p>
                            </div>
                        </div>

                        <div className="questions__item">
                            <header className="questions__header">
                                <i className="ri-add-line questions__icon"></i>
                                <h3 className="questions__item-title">
                                    Bộ Nông nghiệp và Phát triển nông thôn có yêu cầu truy xuất nguồn gốc sản phẩm không?
                                </h3>
                            </header>

                            <div className="questions__content">
                                <p className="questions__description">
                                    Đối tượng áp dụng truy xuất nguồn gốc bao gồm cơ sở sản xuất, kinh doanh thực phẩm có
                                    nguồn gốc. Bộ Nông nghiệp và Phát triển nông thôn ban hành Quy định về truy xuất nguồn
                                    gốc và thu hồi sản phẩm không đảm bảo chất lượng và an toàn thực phẩm.
                                </p>
                            </div>
                        </div>

                        <div className="questions__item">
                            <header className="questions__header">
                                <i className="ri-add-line questions__icon"></i>
                                <h3 className="questions__item-title">
                                    Thông qua mã QR truy xuất nguồn gốc có phát hiện được hàng giả không?
                                </h3>
                            </header>

                            <div className="questions__content">
                                <p className="questions__description">
                                    Mỗi loại thực phẩm sẽ có một mã QR riêng, có tích hợp tính năng chống giả. Người tiêu
                                    dùng hoàn toàn có thể xác thực được toàn bộ thông tin của sản phẩm.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="questions__group">
                        <div className="questions__item">
                            <header className="questions__header">
                                <i className="ri-add-line questions__icon"></i>
                                <h3 className="questions__item-title">
                                    Sầu riêng được truy xuất nguồn gốc được định danh như nào?
                                </h3>
                            </header>

                            <div className="questions__content">
                                <p className="questions__description">
                                    Việc định danh có thể theo ba mức định danh sau: định danh loại sản phẩm, định danh theo
                                    lô và định danh theo đơn vị.
                                </p>
                            </div>
                        </div>

                        <div className="questions__item">
                            <header className="questions__header">
                                <i className="ri-add-line questions__icon"></i>
                                <h3 className="questions__item-title">
                                    Làm thế nào để đối phó với các bản sao giả và hàng nhái theo trên thị trường?
                                </h3>
                            </header>

                            <div className="questions__content">
                                <p className="questions__description">
                                    Chúng tôi sử dụng những tem chống giả do Vina CHG cung cấp hỗ trợ hiệu quả công tác điều
                                    tra và xử lý hàng nhái.
                                </p>
                            </div>
                        </div>

                        <div className="questions__item">
                            <header className="questions__header">
                                <i className="ri-add-line questions__icon"></i>
                                <h3 className="questions__item-title">
                                    Truy xuất nguồn gốc sản phẩm có tầm quan trọng như nào trong ngành công nghiệp thực
                                    phẩm?
                                </h3>
                            </header>

                            <div className="questions__content">
                                <p className="questions__description">
                                    Đảm bảo chất lượng sầu riêng khi đến tay người tiêu dùng.
                                    Liên tục cải tiến chuỗi sản xuất và cung ứng.
                                    Đáp ứng được các yêu cầu của quy định địa phương và toàn cầu.
                                    Duy trì hoặc xây dựng lại lòng tin của người tiêu dùng sau một vấn đề ô nhiễm có thể
                                    được xác định.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer section" id="contact">
                <div className="footer__container container grid">
                    <div className="footer__content">
                        <a href="#" className="footer__logo">
                            <i className="footer__logo-icon"></i> Durian Traceability
                        </a>

                        <h3 className="footer__data">
                            Đăng nhập để cập nhật <br /> thông tin của chúng tôi sớm nhất
                        </h3>

                        <div className="footer__subscribe">
                            <input type="email" placeholder="Đăng nhập ngay" className="footer__input" />

                            <button className="button button--flex footer__button">
                                <a href="assets/Đăng nhập/IndexLogin.html">Đăng nhập</a>
                                <i className="ri-arrow-right-up-line button__icon"></i>
                            </button>
                        </div>
                    </div>

                    <div className="footer__content">
                        <a href="#" className="footer__logo">
                            <i className="footer__logo-icon"></i> Địa chỉ
                        </a>

                        <ul className="footer__data">
                            <li className="footer__information">Đà Lạt - Lâm Đồng</li>
                            <li className="footer__information">Phù Đổng Thiên Vương</li>
                        </ul>
                    </div>

                    <div className="footer__content">
                        <a href="#" className="footer__logo">
                            <i className="footer__logo-icon"></i> Thông tin
                        </a>

                        <ul className="footer__data">
                            <li className="footer__information">2111903@dlu.edu.com</li>
                            <li className="footer__information">2110060@dlu.edu.com</li>
                            <li className="footer__information">2115258@dlu.edu.com</li>
                            <li className="footer__information">2111839@dlu.edu.com</li>

                            <div className="footer__social">
                                <a href="#" className="footer__social-link">
                                    <i className="ri-facebook-fill"></i>
                                </a>
                                <a href="#" className="footer__social-link">
                                    <i className="ri-instagram-line"></i>
                                </a>
                                <a href="#" className="footer__social-link">
                                    <i className="ri-github-fill"></i>
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>

                <p className="footer__copy">&#169; Trang web được thành lập vào năm 2023</p>
            </footer>

            <a href="#" className="scrollup" id="scroll-up">
                <i className="ri-arrow-up-fill scrollup__icon"></i>
            </a>

        </div>

    );
}
