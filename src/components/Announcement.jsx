import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  background-color: hsl(180, 100%, 25.098039215686274%);
  color: hsl(0, 0%, 100%);
  font-weight: 500;
  font-size: 14px;
`;

const Announcement = () => {
  return (
    <Container>Super Deal Offer! Free shipping on orders Over $100.</Container>
  );
};

export default Announcement;
