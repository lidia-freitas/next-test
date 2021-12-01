import fetchService from 'services/fetch.service';
import SearchBar from 'components/SearchBar';
import Breadcrumbs from 'components/Breadcrumbs';
import ItemDetails from 'components/ItemDetails';
import styles from 'styles/Item.module.scss';
import { Col, Container, Row } from 'react-grid-system';

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  };
};

export const getStaticProps = async (context) => {
  const { getItem } = fetchService();
  const id = context.params.id;

  return await getItem(id);
};

const Item = ({ data, error }) => {

  return (
    <div>
      <SearchBar />

      <Breadcrumbs />

      <Container style={{ maxWidth: 1200 }}>
        <Row>
          <Col>
            <div className={styles.itemContainer}>
              {error ? (
                <p>{error.message}</p>
              ) : (
                <ItemDetails item={data} />
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Item;
