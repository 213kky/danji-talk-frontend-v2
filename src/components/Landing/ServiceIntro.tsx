import { useMediaQuery } from '../../hooks/useMediaQuery';
import Logo from '../../assets/logo.svg';
import FeatureList from './FeatureList';
import { QRCodeSVG } from 'qrcode.react';

const ServiceIntro = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');

  return (
    <div className="service-intro" aria-hidden={isMobile || isTablet}>
      <div className="intro-header">
        <div className="logo-wrapper">
          <img src={Logo} className="app-logo" alt="단지톡 로고" />
        </div>
        <div className="title-wrapper">
          <h1 className="app-title">단지톡</h1>
          <p className="subtitle">아파트 생활의 시작</p>
        </div>
      </div>

      <div className="intro-content">
        <div className="description">
          <h2 className="service-title">단지 생활을 더 쉽게</h2>
          <p className="service-desc">
            관리자와 입주민을 위한 스마트한 소통 플랫폼
          </p>
        </div>

        <FeatureList />

        <div className="qr-container">
          <div className="qr-item">
            <QRCodeSVG
              value="https://github.com/DanjiTalk/danji-talk-frontend"
              size={100}
              className="qr-code"
              level="H"
              includeMargin={true}
            />
            <p className="qr-label">Frontend Source</p>
          </div>
          <div className="qr-item">
            <QRCodeSVG
              value="https://github.com/DanjiTalk/danji-talk-backend"
              size={100}
              className="qr-code"
              level="H"
              includeMargin={true}
            />
            <p className="qr-label">Backend Source</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceIntro;
