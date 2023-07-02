import { useState } from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Header = (): JSX.Element => {
  const [burgerStatus, setBurgerStatus] = useState<boolean>(false);
  return (
    <Container>
      <a>
        <img src="/assets/logo.svg" alt="tesla-logo" />
      </a>
      <Menu>
        <a href="#"> Model S</a>
        <a href="#"> Model 3</a>
        <a href="#"> Model X</a>
        <a href="#"> Model Y</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus ? 1 : 0}>
        <CloseWrapper>
          <CloseButton onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <ShowOnSm>
          <a href="#"> Model S</a>
        </ShowOnSm>
        <ShowOnSm>
          <a href="#"> Model 3</a>
        </ShowOnSm>
        <ShowOnSm>
          <a href="#"> Model X</a>
        </ShowOnSm>
        <ShowOnSm>
          <a href="#"> Model Y</a>
        </ShowOnSm>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Demo Drive</a>
        </li>
        <li>
          <a href="#">Insurance</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Commercial energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
        <ShowOnSm>
          <a href="#">Shop</a>
        </ShowOnSm>
        <ShowOnSm>
          <a href="#">Tesla Account</a>
        </ShowOnSm>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 10px;
    flex-wrap: nowrap;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 5px;
    padding: 10px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const CustomMenu = styled(FiMenu)`
  cursor: pointer;
  font-size: 24px;
`;

const BurgerNav = styled.div<{ show: number }>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 20;
  list-style-type: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.25s ease-in-out;
  overflow-y: auto;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CloseButton = styled(AiOutlineClose)`
  cursor: pointer;
  font-size: 24px;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ShowOnSm = styled.li`
  @media (min-width: 768px) {
    display: none;
  }
`;
