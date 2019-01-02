import React from "react";
import { MDBMask, MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer  } from "mdbreact";
import "./style/index.css"

class AppPage extends React.Component {
state = {
  collapsed: false
};

handleTogglerClick = () => {
this.setState({
  collapsed: !this.state.collapsed
});
};

render() {

return (
<div id="apppage">

  <MDBView>
    <MDBMask className="d-flex justify-content-center align-items-center gradient">
      <MDBContainer>
        <MDBRow>
          <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
            <h1 className="h1-responsive font-weight-bold mt-sm-5">
            GET YOUR STICKERS!{" "}
            </h1>
            <hr className="hr-light" />
            <h6 className="mb-4">
            Inspirity was made for you! This Website collects the most inspiring Stuff such as Success Stories, Ted Talks, Inspirational Music Playlists, and many other things. But most importantly, here you are able to buy Stickers! If you like it, please share it with your Friends by clicking <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/inspirity">Here</a>. Thank you!
            </h6>
            <MDBBtn color="white">Download</MDBBtn>
            <MDBBtn outline color="white">
              Learn More
            </MDBBtn>
          </div>
          <MDBCol md="6" xl="5" className="mt-xl-5">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png" alt="" className="img-fluid" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBMask>
  </MDBView>

  <MDBContainer>
    <MDBRow className="py-5">
      <MDBCol md="12" className="text-center">
        <q id="pepe"> 
        Everyone needs to get inspired before creating something and it's actually the most important step in the creative process. The Creation of this website was on purpose to provide people with Inspiring stuff such as Success Stories ,Quotes, or even beautiful Soundscapes that motivate them to make action! All this cool stuff at one place.
        </q>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</div>
);
}
}

export default AppPage;