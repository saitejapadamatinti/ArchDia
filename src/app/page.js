import Image from "next/image";
import styles from "./page.module.css";
import Login from "./login/page";
import Start from "./start/page";

export default function Home() {
  return (
    <main>
      <div>
        <Start></Start>
        {/* <Login></Login> */}
      </div>
    </main>
  );
}
