import { Scrollbars } from 'react-custom-scrollbars-2';
import { ProductsList, CloserMessage } from './DiaryProductsListItem.styled';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import PropTypes from 'prop-types';

const DiaryProductsListItem = ({
  productsItem,
  setDeletedProduct,
  dateCalendar,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [dateNow, setDateNow] = useState(new Date());

  return (
    <ProductsList margin={productsItem.length !== 0 ? '' : 'empty'}>
      <Scrollbars autoHeight>
        {productsItem.length !== 0 ? (
          productsItem.map((product, i) => (
            <li key={product.id || product._id}>
              <p>{product.nameProduct}</p>
              <p>{product.weight} g</p>
              <p>{Math.round(product.calories * 0.01 * product.weight)} ccal</p>
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
              ? 'Add our products'
              : 'You have not added products on this day'}
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
