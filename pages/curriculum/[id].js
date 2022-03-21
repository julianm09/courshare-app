import styled from "styled-components";
import { useServer, useTheme, useUser } from "@/utils/provider";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ax from "axios";

export default function Home({}) {
  const r = useRouter();
  const { id } = r.query;

  const { theme } = useTheme();

  const { server } = useServer();

  const [curriculum, setCurriculum] = useState({});

  const { user, setUser } = useUser();

  const getCurriculum = async () => {
    const res = await ax.get(`${server}/curriculum/${id}`);
    setCurriculum(res.data[0]);
  };

  useEffect(() => {
    getCurriculum();
  }, []);

  console.log(curriculum);
  return <Cont>currciculm{id}</Cont>;
}

const Cont = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
