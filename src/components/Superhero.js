import { Card, Container, Row, Col, Image } from "react-bootstrap";
import antmanImage from "../assets/images/superhero/antman.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/batman.jpg";
import robinhoodImage from "../assets/images/superhero/robinhood.jpg";
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg";
import supermanImage from "../assets/images/superhero/superman.jpg";

const SuperHero = () => {
  return (
    <div>
      <Container>
        <h1 id="superhero" className="pt-4 pb-4 text-white">
          Super Hero Movies
        </h1>
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white  movieImage">
              <Image
                src={antmanImage}
                alt="Dune image"
                className="imagesCard"
              />
              <div className="m-1 p-2">
                <Card.Title className="text-center">Ant Man </Card.Title>
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
                src={avengerImage}
                alt="Dune image"
                className="imagesCard"
              />
              <div className="m-1 p-2">
                <Card.Title className="text-center">Avenger </Card.Title>
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
                src={batmanImage}
                alt="Dune image"
                className="imagesCard"
              />
              <div className="m-1 p-2">
                <Card.Title className="text-center">Bat Man </Card.Title>
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
                src={robinhoodImage}
                alt="Dune image"
                className="imagesCard"
              />
              <div className="m-1 p-2">
                <Card.Title className="text-center">Robin Hood </Card.Title>
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
                src={spidermanImage}
                alt="Dune image"
                className="imagesCard"
              />
              <div className="m-1 p-2">
                <Card.Title className="text-center">Spider Man </Card.Title>
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
                src={supermanImage}
                alt="Dune image"
                className="imagesCard"
              />
              <div className="m-1 p-2">
                <Card.Title className="text-center">Super Man </Card.Title>
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

export default SuperHero;
