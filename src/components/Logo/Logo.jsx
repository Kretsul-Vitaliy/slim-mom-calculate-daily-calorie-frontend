import { Link } from 'react-router-dom';

import { Picture } from './Logo.styled';

import desctop from '../../images/logo/logo-desctop.svg';
import tablet from '../../images/logo/logo-tablet.svg';
import mobile from '../../images/logo/logo-mobile.svg';

const Logo = () => {
  return (
    <Link to="/calculator">
      <Picture>
        <source
          media="(max-width: 767px)"
          srcSet={mobile}
          width="47"
          height="44"
        />
        <source
          media="(min-width: 768px) and (max-width: 1279px)"
          srcSet={tablet}
        />
        <source
          media="(min-width: 1280px)"
          srcSet={desctop}
          width="167"
          height="66"
        />
        <img src={mobile} alt="Логотип" />
      </Picture>
    </Link>
  );
};

export default Logo;
