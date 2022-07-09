import Container from "../Container";
import desctop from "../../images/logo/logo-desctop.svg";
import tablet from "../../images/logo/logo-tablet.svg";
import mobile from "../../images/logo/logo-mobile.svg";
import { HeaderContainer, Link } from "./Header.styled";

const Header = () => {
  return (
    <header>
      <Container>
        <HeaderContainer>
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet={mobile}
              width="47"
              height="44"
            />
            <source
              media="(min-width: 768px) and (max-width: 1280px)"
              srcSet={tablet}
            />
            <source
              media="(min-width: 1280px)"
              srcSet={desctop}
              width="167"
              height="66"
            />
            <img src={mobile} alt="Логотип" />
          </picture>
          <ul>
            <li>
              <Link href="https://translate.google.com/?hl=ru">sign in</Link>
            </li>
            <li>
              <a href="https://translate.google.com/?hl=ru">registrtation</a>
            </li>
          </ul>
        </HeaderContainer>
      </Container>
    </header>
  );
};

export default Header;
