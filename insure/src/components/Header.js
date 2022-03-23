import styled from "styled-components";

const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-bottom: 1px solid black;
  font-size: 20px;
  font-weight: bold;
`;

const Header = ({ title }) => {
    return <div>
            <HeaderBlock>{title}</HeaderBlock>
            <a href='/test'>이동1</a>&nbsp;&nbsp;&nbsp;
            <a href='/test2'>이동2</a>
        </div>;
};

export default Header;