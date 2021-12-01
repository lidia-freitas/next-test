import PropTypes from 'prop-types';
import Item from 'models/Item';
import ItemResult from 'components/ItemResult';
import styles from 'styles/components/ItemDetail.module.scss';
import { Col, Row } from 'react-grid-system';

const ItemDetails = ({ item }) => {

  return (
    <div className={styles.itemContainer}>
      <Row>
        <Col lg={8}>
          <div className={styles.photo}>
            <img src={item.picture} alt={item.title} />
          </div>
        </Col>

        <Col lg={3}>
          <div className={styles.content}>
            <p className={styles.smallText}>{item.condition} - {item.sold_quantity} vendidos</p>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.price}>
              $ <span>{item.price}</span>
            </p>

            <button className={styles.buyButton} type="button">Comprar</button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className={styles.content}>
            <div className={styles.description}>
              <h2 className={styles.descriptionTitle}>Descrição do produto</h2>
              <p className={styles.descriptionText}>{item.description}</p>
            </div>
          </div>
        </Col>
      </Row>


    </div>
  );
};

ItemResult.propTypes = {
  item: PropTypes.shape(Item)
};

export default ItemDetails;
