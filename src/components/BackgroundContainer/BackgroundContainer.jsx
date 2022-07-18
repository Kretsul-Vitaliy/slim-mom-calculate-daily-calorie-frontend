import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth';

import {
  BackgroundWrapper,
  BackgroundNoWrapper,
} from './BackgroundContainer.styled';
const BackgroundContainer = ({ children }) => {
  const isLogged = useSelector(getIsAuthenticated);
  return (
    <>
      {isLogged ? (
        <BackgroundNoWrapper>{children}</BackgroundNoWrapper>
      ) : (
        <BackgroundWrapper>{children}</BackgroundWrapper>
      )}
    </>
  );
};
export default BackgroundContainer;
