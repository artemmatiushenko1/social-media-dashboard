import ToogleButton from './ToogleButton';
import './Header.css';

export default function Header(props) {
  return (
    <div>
      <header className="header u-mb--big">
        <div className="header__textbox">
          <h1 className="heading-primary u-mb--tiny">Social Media Dashboard</h1>
          <p className="paragraph">
            Total Followers:{' '}
            <span className="header__followers-count">23, 004</span>
          </p>
        </div>
        <div className="header__color-mode-box">
          <p className="paragraph u-mr-small">Dark Mode</p>
          <ToogleButton className="header__theme-toogle-btn" />
        </div>
      </header>
    </div>
  );
}
