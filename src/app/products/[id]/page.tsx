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

// const dat = [
//   {id: 1, name: "Test", price: "200", type: "calça"}
// ]

interface Props {
  params: {
    id: string
  };
}

// const ProductDetail: React.FC<Props> = ({ produto }) => {
const ProductDetail: React.FC<Props> = ({ params }) => {
  const { query } = useRouter();
  const id = query.id as string;

  const produto = data?.find((prod: Produc) => prod.id === parseInt(id));

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