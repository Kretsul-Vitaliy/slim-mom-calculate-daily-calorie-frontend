import Container from '../../components/Container';
import Header from '../../components/Header';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import LanguageSelector from '../../components/LanguageSelector'
import Navigation from '../../components/Navigation'

const MainPage = () => {

  return (
    <>
      <div>
        <h3>MainPage</h3>
        <Navigation />
        <LanguageSelector />
        <Container>
          <Header />
          <DailyCaloriesForm />
        </Container>
      </div>
    </>
  );
};

export default MainPage;
