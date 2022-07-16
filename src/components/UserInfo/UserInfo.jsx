import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { UserInfoBlock, Divider, ExitButton, UserName } from './UserInfo.styled'
import UserAvatar from '../UserAvatar'

import { getUser } from '../../redux/auth/authSelector'
import { logOut } from '../../redux/auth/authOperation'
import { useNavigate } from 'react-router-dom';


const UserInfo = () => {
  const dispatch = useDispatch();

  const { t } = useTranslation()

  const userInfo = useSelector(getUser)
  const navigate = useNavigate()

  const onExitClick = async () => {
    await dispatch(logOut())
    navigate('/login')
  }

  return (
    <UserInfoBlock>
      {userInfo.name &&
       <>
        <UserAvatar name={userInfo.name} />
        <UserName>{userInfo.name}</UserName>
        <Divider />
       </>
      }
      <ExitButton onClick={onExitClick}>{t?.('nav.exit')}</ExitButton>
    </UserInfoBlock>
  );
};

export default UserInfo;
