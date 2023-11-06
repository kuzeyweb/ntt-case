import HomeCarousel from "../components/home/Carousel";
import Products from "../components/home/Products";
import { Container } from "../styles/general.styled";

const Homepage = () => {
  return (
    <>
      <HomeCarousel />
      <Container>
        <Products />
      </Container>
    </>
  );
};

export default Homepage;
