import { Link } from 'react-router-dom';
import { getIsAuthenticated } from '../../redux/auth';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import {
  ModalContent,
  Title,
  Text,
  Line,
  TitleList,
  List,
  Item,
  ButtonContainer,
} from './DailyCalorieIntake.styled';
import Button from '../Button';
import { useTranslation } from 'react-i18next';
const DailyCalorieIntake = ({ calories, products }) => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  const { t } = useTranslation();

  return (
    <ModalContent>
      <Title>{t?.('dci.title')}</Title>
      {calories ? (
        <Text>
          {calories} {t?.('dpi.ccal')}
        </Text>
      ) : null}
      <Line />
      <TitleList>{t?.('dci.noEat')}</TitleList>
      {products?.lenght !== 0 ? (
        <List>
          {products?.map(product => (
            <Item key={nanoid()}>{t?.(product)}</Item>
          ))}
        </List>
      ) : null}
      {isAuthenticated ? (
        <Link to="/diary">
          <ButtonContainer>
            {' '}
            <Button type="button" size="long">
              {t?.('dcf.btn')}
            </Button>
          </ButtonContainer>
        </Link>
      ) : (
        <Link to="/signup">
          <ButtonContainer>
            {' '}
            <Button type="button" size="long">
              {t?.('dcf.btn')}
            </Button>
          </ButtonContainer>
        </Link>
      )}
    </ModalContent>
  );
};

export default DailyCalorieIntake;
