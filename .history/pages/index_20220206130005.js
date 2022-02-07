import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CourseDetailCard from "@/components/CourseDetailCard";

export default function Home() {
  return (
    <div>
      <CourseDetailCard></CourseDetailCard>
    </div>
  );
}
