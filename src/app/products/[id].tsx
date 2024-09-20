import { GetStaticProps, GetStaticPaths } from "next";
// import { GetServerSideProps } from "next";
// import dat from "../data/dat.json";
import { products } from "../data/data";
// import { produc } from './../types/prod.d';
// import Image from "next/image";

interface Produ {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface Props {
  produto: Produ | null;
}

const ProductDetail: React.FC<Props> = ({ produto }) => {
  if (!produto) return <div>Produto não encontrado</div>;

  return (
    <div>
      {/* <h1>{produto.name}</h1> */}
      {/* <Image src={produto.photo} alt={produto.name} /> */}
      <h1>{produto.name}</h1>
      <p>{produto.description}</p>
      <p>Preço: ${produto.price}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((product) => ({
    params: { id: product.id }
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  // const id = context.params?.id as string;
  const id = context.params?.id as string;
  const product = products.find((p) => p.id === id) || null;

  return {
    props: {
      product: product || null,
    },
  };
};

export default ProductDetail;