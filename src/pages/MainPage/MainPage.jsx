import Container from "../../components/Container";
import Header from "../../components/Header";
import DailyCaloriesForm from "../../components/DailyCaloriesForm";
import DiaryDateСalendar from "../../components/DiaryDateСalendar";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div>
        <h3>MainPage</h3>
        <p>{t("test")}</p>
        <button onClick={() => changeLanguage("ru")}>ru</button>
        <button onClick={() => changeLanguage("uk")}>uk</button>
        <button onClick={() => changeLanguage("en")}>en</button>
        <Container>
          <Header />
          <DailyCaloriesForm />
        </Container>
      </div>
    </>
  );
};

export default MainPage;
