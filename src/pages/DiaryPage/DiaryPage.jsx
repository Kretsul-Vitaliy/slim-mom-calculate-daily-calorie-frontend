import { useState } from 'react';
import { useSelector } from 'react-redux';
import { IoMdReturnLeft } from 'react-icons/io';
import { Link } from 'react-router-dom';
import {
  Container,
  DiaryDateСalendar,
  DiaryAddProductForm,
  DiaryProductsList,
  Button,
  Modal,
} from '../../components';
import TurnBack from '../../components/Modal';
import useModal from '../../hooks/useModal';
import { getIsUserAuthorizate } from '../../redux/auth';
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
        <DiaryDateСalendar
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
