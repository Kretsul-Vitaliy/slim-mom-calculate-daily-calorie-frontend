import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  UserInfoBlock,
  Divider,
  ExitButton,
  UserName,
} from './UserInfo.styled';
import UserAvatar from '../UserAvatar';
import { getUser, logOut } from '../../redux/auth';
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const userInfo = useSelector(getUser);
  const navigate = useNavigate();

  const onExitClick = async () => {
    try {
      await dispatch(logOut());
    } catch (error) {
      console.log(error);
    } finally {
      navigate('/login');
    }
  };

  return (
    <UserInfoBlock>
      {userInfo?.name && (
        <>
          <UserAvatar name={userInfo?.name} />
          <UserName>{userInfo?.name}</UserName>
          <Divider />
        </>
      )}
      <ExitButton onClick={onExitClick}>{t?.('nav.exit')}</ExitButton>
    </UserInfoBlock>
  );
};

export default UserInfo;
