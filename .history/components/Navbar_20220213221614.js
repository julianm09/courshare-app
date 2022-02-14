import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Navbar({}) {
  const r = useRouter();

  const [menu, setMenu] = useState(false);

  const handleLink = (t) => {
    setMenu(false);
    r.push(t);
  };

  return (
    <NavbarUI>
      <Logo
        src="/logo.svg"
        selected={r.pathname == "/"}
        onClick={() => handleLink("/")}
        style={{ width: 20 }}
      ></Logo>
      <Navigation>
        <LinkUI selected={r.pathname == "/"} onClick={() => handleLink("/")}>
          Home
        </LinkUI>
        <LinkUI
          selected={r.pathname == "/explore"}
          onClick={() => handleLink("/explore")}
        >
          Explore
        </LinkUI>
        <LinkUI
          selected={r.pathname == "/mypage"}
          onClick={() => handleLink("/mypage")}
        >
          My Page
        </LinkUI>
        <LinkUI
          selected={r.pathname == "/settings"}
          onClick={() => handleLink("/settings")}
        >
          Settings
        </LinkUI>
      </Navigation>
      <MenuIcon
        src={menu ? "/icons/close.svg" : "/icons/menu.svg"}
        onClick={() => setMenu(!menu)}
      />
      {menu ? (
        <MobileMenu>
          <LinkUI selected={r.pathname == "/"} onClick={() => handleLink("/")}>
            Home
          </LinkUI>
          <LinkUI
            selected={r.pathname == "/explore"}
            onClick={() => handleLink("/explore")}
          >
            Explore
          </LinkUI>
          <LinkUI
            selected={r.pathname == "/mypage"}
            onClick={() => handleLink("/mypage")}
          >
            My Page
          </LinkUI>
          <LinkUI
            selected={r.pathname == "/settings"}
            onClick={() => handleLink("/settings")}
          >
            Settings
          </LinkUI>
        </MobileMenu>
      ) : (
        <></>
      )}
    </NavbarUI>
  );
}

const NavbarUI = styled.div`
  width: 100%;
  padding: 0 5%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`;

const Logo = styled.img`
  cursor: pointer;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const LinkUI = styled.div`
  cursor: pointer;
  font-family: General Sans;
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
  color: #8b8b8b;
  color: ${(props) => (props.selected ? "#595959" : "#8B8B8B")};
  font-weight: ${(props) => (props.selected ? "500" : "400")};
`;

const MenuIcon = styled.img`
  cursor: pointer;
  display: none;
  @media (max-width: 1000px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  cursor: pointer;
  display: flex;
  position: absolute;
  height: 200px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  top: 100px;
  width: 90%;
  @media (min-width: 1000px) {
    display: none;
  }
`;
