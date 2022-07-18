import { useTranslation } from 'react-i18next';
import {
  Wrapper,
  Title,
  List,
  ListItem,
  ListItemData,
} from './DailyCalorieIntake.slyled.jsx';

const DailyCalorieIntake = ({ date = `06/20/2020`, kcal = '000' }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>
        {t?.('rightSideBar.summary')} {date}
      </Title>
      <List>
        <ListItem>
          <ListItemData>{t?.('rightSideBar.left')}</ListItemData>
          <ListItemData>
            {kcal} {t?.('dpi.ccal')}
          </ListItemData>
        </ListItem>
        <ListItem>
          <ListItemData>{t?.('rightSideBar.consumed')}</ListItemData>
          <ListItemData>
            {kcal} {t?.('dpi.ccal')}
          </ListItemData>
        </ListItem>
        <ListItem>
          <ListItemData>{t?.('rightSideBar.dailyRate')}</ListItemData>
          <ListItemData>
            {kcal} {t?.('dpi.ccal')}
            {/* { kcalNorm  && {kcalNorm = '000'}} */}
            {/* {cal === undefined ? '000' : cal} */}
          </ListItemData>
        </ListItem>
        <ListItem>
          <ListItemData>{t?.('rightSideBar.persent')}</ListItemData>
          <ListItemData>
            {kcal} {t?.('dpi.ccal')}
          </ListItemData>
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default DailyCalorieIntake;
