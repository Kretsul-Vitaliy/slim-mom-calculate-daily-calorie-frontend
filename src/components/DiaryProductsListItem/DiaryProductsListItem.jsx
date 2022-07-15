import { Scrollbars } from 'react-custom-scrollbars-2';
import { ProductsList, CloserMessage } from './DiaryProductsListItem.styled';
import { IoMdClose } from 'react-icons/io';

const DiaryProductsListItem = ({ productsItem, setDeletedProduct }) => {
  // console.log(productsItem);
  return (
    <ProductsList>
      <Scrollbars autoHeight>
        {productsItem.length !== 0 ? (
          productsItem.map(product => (
            <li key={product.id || product._id}>
              <p>{product.nameProduct}</p>
              <p>{product.weight}</p>
              <p>{Math.round(product.calories * 0.01 * product.weight)} ccal</p>
              <button
                onClick={() => setDeletedProduct(product.id || product._id)}
              >
                <IoMdClose size={24} color={'#9B9FAA'} />
              </button>
            </li>
          ))
        ) : (
          <CloserMessage>Add our products</CloserMessage>
        )}
      </Scrollbars>
    </ProductsList>
  );
};

export default DiaryProductsListItem;
