import { Card, Container, Row, Col, Image } from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";
import everythingImage from "../assets/images/trending/everything.jpg";
import infiniteImage from "../assets/images/trending/infinite.jpg";
import jokerImage from "../assets/images/trending/joker.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <h1 id="trending" className="pt-4 pb-4 text-white">
          Trending Movies
        </h1>
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white  movieImage">
              <Image src={duneImage} alt="Dune image" className="imagesCard" />
              <div className="m-1 p-2">
                <Card.Title className="text-center">Dune </Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with as a natural lead-in to additional
                  content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white  movieImage">
              <Image
                src={everythingImage}
                alt="Dune image"
                className="imagesCard"
              />
              <div className="m-1 p-2">
                <Card.Title className="text-center">Everything </Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with as a natural lead-in to additional
                  content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white  movieImage">
              <Image
                src={infiniteImage}
                alt="Dune image"
                className="imagesCard"
              />
              <div className="m-1 p-2">
                <Card.Title className="text-center">Infinite </Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with as a natural lead-in to additional
                  content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white  movieImage">
              <Image src={jokerImage} alt="Dune image" className="imagesCard" />
              <div className="m-1 p-2">
                <Card.Title className="text-center">Joker </Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with as a natural lead-in to additional
                  content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white  movieImage">
              <Image
                src={lightyearImage}
                alt="Dune image"
                className="imagesCard"
              />
              <div className="m-1 p-2">
                <Card.Title className="text-center">Buzz Lightyear </Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with as a natural lead-in to additional
                  content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white  movieImage">
              <Image
                src={morbiusImage}
                alt="Dune image"
                className="imagesCard"
              />
              <div className="m-1 p-2">
                <Card.Title className="text-center">Morbius </Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with as a natural lead-in to additional
                  content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
