import { FavoriteBorder, Search, ShoppingCart } from "@mui/icons-material";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: hsla(0, 0%, 0%, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(
    195.00000000000017,
    66.66666666666674%,
    97.64705882352942%
  );
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: hsl(0, 0%, 100%);
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: hsl(0, 0%, 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: hsl(180, 37.50000000000008%, 93.72549019607843%);
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCart />
        </Icon>
        <Icon>
          <Search />
        </Icon>
        <Icon>
          <FavoriteBorder />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
