import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { UserInfoBlock, Divider, ExitButton, UserName } from './UserInfo.styled'

import { getUser } from '../../redux/auth/authSelector'
import { logOut } from '../../redux/auth/authOperation'

const UserInfo = () => {
  const dispatch = useDispatch();

  const { t } = useTranslation()

  const userInfo = useSelector(getUser)

  const onExitClick = () => {
    dispatch(logOut())
  }

  return (
    <UserInfoBlock>
      {userInfo.name &&
       <>
        <UserName>{userInfo.name}</UserName>
        <Divider />
       </>
      }
      <ExitButton onClick={onExitClick}>{t?.('nav.exit')}</ExitButton>
    </UserInfoBlock>
  );
};

export default UserInfo;
