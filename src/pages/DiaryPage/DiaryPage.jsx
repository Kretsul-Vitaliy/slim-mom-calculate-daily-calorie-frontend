import Container from '../../components/Container';
import DiaryDateCakendar from '../../components/DiaryDateСalendar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
import DiaryProductsList from '../../components/DiaryProductsList';
import { useState } from 'react';
import useModal from '../../hooks/useModal';
import { getIsUserAuthorizate } from '../../redux/auth/authSelector';
import { useSelector } from 'react-redux/es/exports';
import Button from '../../components/Button';
import Modal from '../../components/Modal/Modal';
import { IoMdReturnLeft } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { TurnBack } from '../../components/Modal/Modal.styled';
import { DesctopForm, ButtonOpenModal } from './DiaryPage.styled';

const DiaryPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [gramsOfProducts, setGramsOfProducts] = useState(null);
  const persistToken = useSelector(getIsUserAuthorizate);
  const [productsItem, setProductsItem] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [dateNow, setDateNow] = useState(new Date());
  const { isShowing, toggle } = useModal();

  return (
    <>
      <TurnBack>
        <Link to="/">
          <IoMdReturnLeft size={13} />
        </Link>
      </TurnBack>
      <Container>
        <DiaryDateCakendar
          dateCalendar={startDate}
          setDateCalendar={setStartDate}
        />
        {startDate.toLocaleDateString() === dateNow.toLocaleDateString() && (
          <DesctopForm>
            <DiaryAddProductForm
              setSelectedProduct={setSelectedProduct}
              setGramsOfProducts={setGramsOfProducts}
              toggle={toggle}
              isShowing={isShowing}
            />
          </DesctopForm>
        )}

        <DiaryProductsList
          dateCalendar={startDate.toLocaleDateString()}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          gramsOfProducts={gramsOfProducts}
          persistToken={persistToken}
          productsItem={productsItem}
          setProductsItem={setProductsItem}
        />
        {startDate.toLocaleDateString() === dateNow.toLocaleDateString() && (
          <ButtonOpenModal>
            <Button type="button" size="addRoundBtn" onClick={toggle}>
              +
            </Button>
          </ButtonOpenModal>
        )}

        <Modal isShowing={isShowing} hide={toggle}>
          <DiaryAddProductForm
            setSelectedProduct={setSelectedProduct}
            setGramsOfProducts={setGramsOfProducts}
            toggle={toggle}
            isShowing={isShowing}
          />
        </Modal>
      </Container>
    </>
  );
};

export default DiaryPage;
