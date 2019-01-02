import React from "react";
import { Col, Container, Row, Footer, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput  } from "mdbreact";

class FooterPage extends React.Component {
render() {
return (
<Footer color="unique-color" className="font-small pt-4 mt-4">
  <Container fluid className="text-center text-md-left">
    <Row>


<style dangerouslySetInnerHTML={{__html: "\n.hahi{\n    font-size: 30px;\n    font-family: moon;\n    color: white\n}\n\n" }} />
<style dangerouslySetInnerHTML={{__html: "\n.mb-5{\n    color:white\n}\n" }} />



    <MDBContainer>
      <h2 className="h1-responsive font-weight-bold text-center my-5 hahi">
        WRITE TO US
      </h2>
      <p className="text-center w-responsive mx-auto pb-5 hahi">
      As we Inspire you, We want You to Inspire Us!
      </p>
      <MDBRow>
        <MDBCol md="9" className="md-0 mb-5">
          <form>
            <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-name" label="Your name" />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput
                    type="text"
                    id="contact-email"
                    label="Your email"
                  />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-subject" label="Subject" />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput
                    type="textarea"
                    id="contact-message"
                    label="Your message"
                  />
                </div>
              </MDBCol>
            </MDBRow>
          </form>
          <div className="text-center text-md-left">
            <MDBBtn color="primary" size="md">
              Send
            </MDBBtn>
          </div>
        </MDBCol>
        <MDBCol md="3" className="text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <MDBIcon icon="map-marker" size="2x" className="blue-text" />
              <p>San Francisco, CA 94126, USA</p>
            </li>
            <li>
              <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
              <p>+ 01 234 567 89</p>
            </li>
            <li>
              <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
              <p>contact@example.com</p>
            </li>
          </ul>
        </MDBCol>
      </MDBRow>
    </MDBContainer>





    </Row>
  </Container>
  <div className="footer-copyright text-center py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="https://www.Inspirity.com">Inspirity  </a>
    </Container>
  </div>
</Footer>
);
}
}

export default FooterPage;
















