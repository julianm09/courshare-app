import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ax from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

export default function Home() {

  const [courses, setCourses] = useState([])

  const getCourses = async () => {
    const res = await ax.get("./api/courses")
    console.log(res.data)
  } 

  useEffect(() => {
    getCourses();
  },[])

  return <div></div>;
}
