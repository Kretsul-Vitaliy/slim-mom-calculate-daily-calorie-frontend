import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = props => {
  const color = props.theme.linkTextColor;
  return (
    <LoaderWrapper>
      <ThreeDots
        height="100"
        width="100"
        color={`${color}`}
        ariaLabel="loading"
      />
    </LoaderWrapper>
  );
};

export default Loader;
