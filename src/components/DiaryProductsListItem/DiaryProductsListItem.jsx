import { Scrollbars } from 'react-custom-scrollbars-2';
import { ProductsList, CloserMessage } from './DiaryProductsListItem.styled';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const DiaryProductsListItem = ({
  productsItem,
  setDeletedProduct,
  dateCalendar,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [dateNow, setDateNow] = useState(new Date());

  const { t } = useTranslation();
  console.log(productsItem);
  return (
    <ProductsList margin={productsItem.length !== 0 ? '' : 'empty'}>
      <Scrollbars autoHeight>
        {productsItem.length !== 0 ? (
          productsItem.map(product => (
            <li key={product.id || product._id}>
              <p>{product.nameProduct}</p>
              <p>{product.weight} g</p>
              <p>{product.calories} ccal</p>
              {dateCalendar === dateNow.toLocaleDateString() && (
                <button
                  onClick={() => setDeletedProduct(product.id || product._id)}
                >
                  <IoMdClose size={24} color={'#9B9FAA'} />
                </button>
              )}
            </li>
          ))
        ) : (
          <CloserMessage>
            {dateCalendar === dateNow.toLocaleDateString()
              ? t?.('dpi.addProd')
              : t?.('dpi.notAdd')}
          </CloserMessage>
        )}
      </Scrollbars>
    </ProductsList>
  );
};

export default DiaryProductsListItem;

DiaryProductsListItem.protoTypes = {
  productsItem: PropTypes.array.isRequired,
  setDeletedProduct: PropTypes.func.isRequired,
  dateCalendar: PropTypes.string.isRequired,
};
