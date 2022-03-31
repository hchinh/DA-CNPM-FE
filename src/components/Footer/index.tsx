import { FacebookOutlined, GoogleOutlined, InstagramOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import FooterWrapper from './styles';
export const Footer = () => {
  return (
    <FooterWrapper>
      <footer className='footer'>
        <div className='grid'>
          <div className='grid__row'>
            <div className='grid__column24'>
              <h3 className='footer__heading'>Chăm sóc khách hàng</h3>
              <ul className='footer__list'>
                <li className='footer__items'>
                  <Link to='' className='footer__link'>
                    Trung tâm trợ giúp
                  </Link>
                </li>
                <li className='footer__items'>
                  <Link to='' className='footer__link'>
                    Multishop
                  </Link>
                </li>
                <li className='footer__items'>
                  <Link to='' className='footer__link'>
                    Hướng dẫn mua hàng
                  </Link>
                </li>
              </ul>
            </div>
            <div className='grid__column24'>
              <h3 className='footer__heading'>Giới thiệu</h3>
              <ul className='footer__list'>
                <li className='footer__items'>
                  <Link to='' className='footer__link'>
                    Giới thiệu
                  </Link>
                </li>
                <li className='footer__items'>
                  <Link to='' className='footer__link'>
                    Tuyển dụng
                  </Link>
                </li>
                <li className='footer__items'>
                  <Link to='' className='footer__link'>
                    Điều khoản
                  </Link>
                </li>
              </ul>
            </div>
            <div className='grid__column24'></div>
            <div className='grid__column24'>
              <h3 className='footer__heading'>Theo dõi chúng tôi trên</h3>
              <ul className='footer__list'>
                <li className='footer__items'>
                  <Link to='' className='footer__link'>
                    <i>
                      <FacebookOutlined />
                    </i>
                    Facebook
                  </Link>
                </li>
                <li className='footer__items'>
                  <Link to='' className='footer__link'>
                    <i>
                      <InstagramOutlined />
                    </i>
                    Insta
                  </Link>
                </li>
                <li className='footer__items'>
                  <Link to='' className='footer__link'>
                    <i>
                      <GoogleOutlined />
                    </i>
                    Google
                  </Link>
                </li>
              </ul>
            </div>
            <div className='grid__column24'>
              <h3 className='footer__heading'>Vào cửa hàng trên ứng dụng</h3>
              <div className='footer__img'>
                <img src='/assets/img/qr-code.png' className='footer__imgqr' alt='' />
                <div className='footer__imgapp'>
                  <Link to='' className='footer__imgapplink'>
                    <img src='/assets/img/app-store.png ' className='footer__imgstore' alt='' />
                  </Link>
                  <Link to='' className='footer__imgapplink'>
                    <img src='/assets/img/googleplay.png ' className='footer__imgggplay' alt='' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </FooterWrapper>
  );
};
