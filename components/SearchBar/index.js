import { useState } from 'react';
import Router from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import styles from 'styles/components/SearchBar.module.scss';
import { Col, Container, Row } from 'react-grid-system';

const SearchBar = () => {
  const [query, setQuery] = useState();

  const handleSearchButtonClick = () => {
    Router.push({
      pathname: '/items',
      query: { search: query }
    });
  };

  const handleSearchInoutChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className={styles.searchBarWrapper}>
      <Container style={{ maxWidth: 1200, height: '100%' }}>
        <Row align="center" justify="center" style={{ height: '100%' }}>
          <Col sm={1}>
            <Link href="/">
              <a>
                <Image
                  src="/assets/Logo_ML@2x.png.png"
                  width={52}
                  height={34}
                  alt="Mercado Livre Logo"
                />
              </a>
            </Link>
          </Col>

          <Col sm={11}>
            <input
              className={styles.input}
              type="search"
              value={query}
              onChange={handleSearchInoutChange}
            />

            <input
              className={styles.button}
              type="button"
              onClick={handleSearchButtonClick}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchBar;
