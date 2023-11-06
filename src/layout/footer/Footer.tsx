import { Button, TextField } from "@mui/material";
import { Container } from "../../styles/general.styled";
import { FooterStyled } from "./footer.styled";
import { v4 as uuid } from "uuid";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <div className="footer-container">
          <div className="left-side">
            <img src="/assets/images/logo/logo-light.svg" alt="" />
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium
              aliquam neque.
            </div>
            <div className="email-signup">
              <TextField
                className="email"
                variant="filled"
                placeholder="Email"
              />
              <Button variant="contained">Sign Up</Button>
            </div>
          </div>
          <div className="right-side">
            {[0, 1, 2].map(() => (
              <div key={uuid()} className="links">
                <h5>Title</h5>
                <ul>
                  <li>Subtitle</li>
                  <li>Subtitle</li>
                  <li>Subtitle</li>
                  <li>Subtitle</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className="divider"></div>
      <Container>
        <div className="sub-footer">
          <div>contact@nttdata.com</div>
          <div>+3 9876 765 444</div>
          <div>
            <InstagramIcon />
            <FacebookIcon />
            <LinkedInIcon />
          </div>
        </div>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
