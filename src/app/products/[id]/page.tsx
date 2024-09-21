// import { GetStaticProps, GetStaticPaths } from "next";
// import { GetServerSideProps } from "next";
// import dat from "../data/dat.json";
import { useRouter } from "next/router"; 
import data from "../../data/data.json";
import { Produc } from '../../types/prod';
// import Image from "next/image";

// interface Produ {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
// }

interface Props {
  produto: Produc | null;
}

// const ProductDetail: React.FC<Props> = ({ produto }) => {
const ProductDetail: React.FC = () => {
  const { query } = useRouter();
  const id = query.id as string;

  if (!produto) return <div>Produto não encontrado</div>;

  return (
    <div>
      {/* <h1>{produto.name}</h1> */}
      {/* <Image src={produto.photo} alt={produto.name} /> */}
      <h1>{produto.name}</h1>
      <p>{produto.type}</p>
      <p>Preço: ${produto.price}</p>
    </div>
  );

};


export default ProductDetail;