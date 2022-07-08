import Container from '../../components/Container';
import Header from '../../components/Header';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';

const MainPage = () => {
  return (
    <>
      <div>
        <h3>MainPage</h3>
        <Container>
          <Header />
          <DailyCaloriesForm />
        </Container>
      </div>
    </>
  );
};

export default MainPage;
