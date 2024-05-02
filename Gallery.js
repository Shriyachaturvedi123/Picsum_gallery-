import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
      );
      setImages(result.data);
    };
    fetchData();
  }, [page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <Container>
      <Row>
        <Col md={6} className="text-center">
          <img
            src={images[0]?.download_url}
            alt={images[0]?.author}
            className="img-fluid my-5"
          />
        </Col>
        <Col md={6}>
          <Row xs={1} md={2} lg={3} className="g-4">
            {images.slice(1).map((image) => (
              <Col key={image.id}>
                <img
                  src={image.download_url}
                  alt={image.author}
                  className="img-fluid"
                />
              </Col>
            ))}
          </Row>
          <button onClick={loadMore} className="btn btn-primary mt-5">
            Load More
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;