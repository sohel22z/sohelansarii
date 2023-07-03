import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/header";

const App = () => {

  return (

    <>

      <Header />

      <Container>

        <Row>

          <Col lg={12} className="text-center">

            {/* <h1 className="fs-28 fw-500 text-danger">UNDER DEVELOPMENT</h1> */}

          </Col>

        </Row>

      </Container>

    </>

  );

};

export default App;