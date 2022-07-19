import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots height="100" width="100" color="#1ee41e" ariaLabel="loading" />
    </LoaderWrapper>
  );
};

export default Loader;
