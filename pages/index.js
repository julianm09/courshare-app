import styled from "styled-components";
import ExploreButton from "@/components/ExploreButton";
import { useTheme, useUser } from "@/utils/provider";
import { comp_themes } from "@/utils/variables";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ax from "axios";
import Login from "@/components/Login";

export default function Home({}) {
  const r = useRouter();

  const { theme, setTheme } = useTheme();

  const { user, setUser } = useUser();

  useEffect(() => {
    const localUser = localStorage.getItem("user");

    if (localUser) {
      setUser(JSON.parse(localUser));
      console.log(JSON.parse(localUser));
    } else {
      return;
    }
  }, []);

  return (
    <>
      {!user ? <Login /> : <></>}
      <BigCont>
        <LeftCont>
          <Header color={comp_themes[theme].switch_text}>
            Welcome, {user && user.name}!
          </Header>
          <Name color={comp_themes[theme].switch_text}>
            Build Your Skills and explore our students' all-in-one curriculums.
          </Name>

          <ExploreButton onClick={() => r.push("/explore")} />
        </LeftCont>
        <RightCont>
          <GroupImg src="/landingvector.svg" />
        </RightCont>
      </BigCont>
    </>
  );
}

const BigCont = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const LeftCont = styled.div`
  display: flex;
  flex-direction: column;
  height: 380px;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2% 5%;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 5% 0 0;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const Header = styled.div`
  font-family: General Sans;

  font-size: 36px;
  line-height: 70px;
  /* identical to box height, or 175% */

  color: ${(props) => props.color};
`;

const Name = styled.div`
  line-height: 50px;
  font-family: General Sans;
  font-size: 24px;
  color: ${(props) => props.color};
`;

const GroupImg = styled.img`
  width: 70%;
`;

/* export async function getServerSideProps(context) {
  try {
    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
    await clientPromise;
    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
 */
