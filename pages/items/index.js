import fetchService from 'services/fetch.service';
import SearchBar from 'components/SearchBar';
import Breadcrumbs from 'components/Breadcrumbs';
import ItemResult from 'components/ItemResult';
import styles from 'styles/Items.module.scss';
import { Col, Container, Row } from 'react-grid-system';

export const getServerSideProps = async (context) => {
  const { getItems } = fetchService();
  const term = context.query.search;
  return getItems({ term });
};

const Items = ({ data, error }) => {

  return (
    <div>
      <SearchBar />

      <Breadcrumbs />

      <Container style={{ maxWidth: 1200 }}>
        <Row>
          <Col>
            <div className={styles.itemsContainer}>
              {error ? (
                <p>{error.message}</p>
              ) : (
                data.map(item => (
                  <ItemResult key={item.id} item={item} />
                ))
              )}
            </div>
          </Col>
        </Row>
      </Container>


    </div>
  );
};

export default Items;
