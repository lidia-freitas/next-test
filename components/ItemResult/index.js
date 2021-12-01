import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from 'styles/components/ItemResult.module.scss';
import Item from 'models/Item';
import { Col, Row } from 'react-grid-system';

const ItemResult = ({ item }) => {

  return (
    <Row>
      <Link href={`/items/${item.id}`}>
        <a className={styles.itemResultContainer}>
          <Col sm={12} md={3}>
            <div className={styles.photo}>
              <img
                src={item.thumbnail}
                alt={item.title}
                width={180}
                height={180}
              />
            </div>
          </Col>

          <Col sm={12} md={7}>
            <div className={styles.details}>
              <p className={styles.price}>
                $ <span>{item.price}</span>

                {!!item.free_shipping && (
                  <span className={styles.isFreeShipping}>

                <Image
                  src="/assets/ic_shipping@2x.png.png"
                  width={24}
                  height={24}
                  alt="Frete Grátis"
                />
              </span>
                )}
              </p>

              <p className={styles.title}>{item.title}</p>
              <p className={styles.condition}>{item.condition}</p>
            </div>
          </Col>

          <Col sm={12} md={2}>
            <div className={styles.location}>
              {item.author?.city.name}
            </div>
          </Col>
        </a>
      </Link>
    </Row>
  );
};

ItemResult.propTypes = {
  item: PropTypes.shape(Item)
};

export default ItemResult;


