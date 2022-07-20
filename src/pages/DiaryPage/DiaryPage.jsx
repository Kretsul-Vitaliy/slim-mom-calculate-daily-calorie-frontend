import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoMdReturnLeft } from 'react-icons/io';
import { Link } from 'react-router-dom';
import {
  DiaryDateСalendar,
  DiaryAddProductForm,
  DiaryProductsList,
  Button,
  Modal,
  RightSideBar,
  Container,
} from '../../components';
import TurnBack from '../../components/Modal';
import useModal from '../../hooks/useModal';
import { getIsAuthenticated, getIsUserAuthorizate } from '../../redux/auth';
import { DesctopForm, ButtonOpenModal } from './DiaryPage.styled';
import { getDay } from '../../redux/products/ProductsOperation';
import { getUserInfoCurrent } from '../../redux/user/userOperation';

const DiaryPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [gramsOfProducts, setGramsOfProducts] = useState(null);
  const persistToken = useSelector(getIsUserAuthorizate);
  const [productsItem, setProductsItem] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [dateNow, setDateNow] = useState(new Date());
  const { isShowing, toggle } = useModal();
  const isAuth = useSelector(getIsAuthenticated);
  const dispatch = useDispatch();
  const day = startDate.toLocaleDateString();

  const handleOnChange = async () => {};

  useEffect(() => {
    dispatch(getUserInfoCurrent(persistToken));
  }, [dispatch, persistToken]);
  useEffect(() => {
    if (selectedProduct || gramsOfProducts || startDate || productsItem) {
      isAuth &&
        setTimeout(() => {
          dispatch(getDay(day));
        }, 500);
    }
  }, [
    day,
    dispatch,
    gramsOfProducts,
    isAuth,
    selectedProduct,
    startDate,
    productsItem,
  ]);

  return (
    <Container>
      <TurnBack>
        <Link to="/">
          <IoMdReturnLeft size={13} />
        </Link>
      </TurnBack>
      <DiaryDateСalendar
        dateCalendar={startDate}
        setDateCalendar={setStartDate}
        onChange={handleOnChange}
      />
      {startDate.toLocaleDateString() === dateNow.toLocaleDateString() && (
        <DesctopForm>
          <DiaryAddProductForm
            setSelectedProduct={setSelectedProduct}
            setGramsOfProducts={setGramsOfProducts}
            toggle={toggle}
            isShowing={isShowing}
            day={day}
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
      <RightSideBar />
    </Container>
  );
};

export default DiaryPage;
