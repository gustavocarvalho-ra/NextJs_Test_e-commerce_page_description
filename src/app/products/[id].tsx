import { GetStaticProps, GetStaticPaths } from "next";
import dat from "../data/dat.json";
import { produc } from './../types/prod.d';
import Image from "next/image";

interface Props {
  produto: produc | null;
}

const ProductDetail: React.FC<Props> = ({ produto }) => {
  if (!produto) return <div>Produto não encontrado</div>;

  return (
    <div>
      <h1>produto.name</h1>
      <Image src={produto.photo} alt={produto.name} />
      <p>Preço: ${produto.price}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = dat.map(product => ({
    params: { id: product.id }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const product = dat.find(p => p.id === id) || null;

  return {
    props: {
      product
    }
  };
};

export default ProductDetail;