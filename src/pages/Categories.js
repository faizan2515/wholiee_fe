import { useEffect, useState } from "react";
import getCategories from "../api/getCategories";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response.data);
    });
  }, []);

  if (categories.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center w-100 vh-100">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <Container className="my-5 min-vh-100">
      <h1 className="mb-3">All Categories</h1>
      <Row>
        {categories.map((category) => (
          <Col lg="3" md="4" sm="6" key={category.id} className="p-2">
            <Card style={{ width: "16rem" }}>
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title className="text-center">
                  {category.category}
                </Card.Title>
                <Button variant="primary" size="sm">
                  View Products
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
