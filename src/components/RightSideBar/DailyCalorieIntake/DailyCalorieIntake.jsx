import { useTranslation } from 'react-i18next';
import {
  Wrapper,
  Title,
  List,
  ListItem,
  ListItemData,
} from './DailyCalorieIntake.slyled.jsx';

import { useSelector } from 'react-redux/es/exports.js';

const DailyCalorieIntake = () => {
  const { t } = useTranslation();
  let daily = useSelector(
    state => state?.dayProducts?.dayInfo?.statisticalByDay?.dailyRate
  );
  let date = useSelector(
    state => state?.dayProducts?.dayInfo?.statisticalByDay?.date
  );
  let consumed = useSelector(
    state => state?.dayProducts?.dayInfo?.statisticalByDay?.kcalConsumed
  );
  let percent = useSelector(
    state => state?.dayProducts?.dayInfo?.statisticalByDay?.percentsOfDailyRate
  );
  let left = useSelector(
    state => state?.dayProducts?.dayInfo?.statisticalByDay?.kcalLeft
  );
  console.log('date', date);

  const stok = '000';

  return (
    <Wrapper>
      <Title>
        {t?.('rightSideBar.summary')} {date ? date : (date = '06/06/2022')}
      </Title>
      <List>
        <ListItem>
          <ListItemData>{t?.('rightSideBar.left')}</ListItemData>
          <ListItemData>
            {left ? left : (left = stok)} {t?.('dpi.ccal')}
          </ListItemData>
        </ListItem>
        <ListItem>
          <ListItemData>{t?.('rightSideBar.consumed')}</ListItemData>
          <ListItemData>
            {consumed ? consumed : (consumed = stok)} {t?.('dpi.ccal')}
          </ListItemData>
        </ListItem>
        <ListItem>
          <ListItemData>{t?.('rightSideBar.dailyRate')}</ListItemData>
          <ListItemData>
            {daily ? daily : (daily = stok)} {t?.('dpi.ccal')}
          </ListItemData>
        </ListItem>
        <ListItem>
          <ListItemData>{t?.('rightSideBar.persent')}</ListItemData>
          <ListItemData>
            {percent ? percent : (percent = stok)} {t?.('dpi.ccal')}
          </ListItemData>
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default DailyCalorieIntake;
