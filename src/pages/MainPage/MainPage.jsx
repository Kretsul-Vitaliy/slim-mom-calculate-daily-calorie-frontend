import {Container, DailyCaloriesForm} from '../../components';
// import Header from '../../components/Header';

// import LanguageSelector from '../../components/LanguageSelector';
// import { useTranslation } from 'react-i18next';
// import AuthorizeGoogle from '../../components/AuthorizeGoogle/AuthorizeGoogle';

const MainPage = () => {
  // const { t, i18n } = useTranslation();

  // const changeLanguage = lang => {
  //   i18n.changeLanguage(lang);
  // };

  return (
    <>
      <div>
        {/* <h3>MainPage</h3>
        <p>{t('test')}</p>
        <button onClick={() => changeLanguage('ru')}>ru</button>
        <button onClick={() => changeLanguage('uk')}>uk</button>
        <button onClick={() => changeLanguage('en')}>en</button> */}

        {/* <LanguageSelector /> */}
        <Container>
          {/* <Header /> */}
          <DailyCaloriesForm />
          {/* <AuthorizeGoogle /> */}
        </Container>
      </div>
    </>
  );
};

export default MainPage;
