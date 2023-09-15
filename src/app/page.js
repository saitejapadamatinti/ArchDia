import Image from "next/image";
import styles from "./page.module.css";
import Login from "./login/page";
import Start from "./start/page";
import Welcome from "./welcome/page";
import { ThemeProvider } from "./themeContext";

export default function Home() {
  return (
    
      <main>
        <div>
          <Welcome></Welcome>
          {/* <Login></Login> */}
        </div>
      </main>
  );
}
