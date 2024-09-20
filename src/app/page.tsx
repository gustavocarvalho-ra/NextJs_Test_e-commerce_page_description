// import Image from "next/image";
import styles from "./page.module.css";
// import { produc } from './types/prod.d';
import dat from "./data/dat.json"
import Link from "next/link";

export default function Home() {

  const produc = [...dat];


  return (
    <div className={styles.page}>
      <h2>test</h2>

      {produc.map(item => (
        <div className={styles.card} key={item.id}>
          <h1>{item.name}</h1>
          <li className={styles.btn}>
            <Link href={`/products/${item.id}`}>
              <ul>{item.name}</ul>
            </Link>
          </li>

        </div>

      ))}
    </div>
  );
}
