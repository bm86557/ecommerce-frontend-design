import Header from '../../components/Header';
import BreadCrumb from '../../components/BreadCrumb';
import Footer from '../../components/Footer';
import ProductDetail from '../../components/ProductDetail';
import { allProducts } from '../../data/products';
import styles from "./product-detail.module.css";

export async function generateStaticParams() {
  return allProducts.map(product => ({
    id: product.id.toString(),
  }));
}

const ProductDetailPage = async ({ params }) => {
  const resolvedParams = await params;
  const productId = resolvedParams.id;

  return (
    <div className={styles.pageContainer}>
      <Header />
      <BreadCrumb />
      <ProductDetail productId={productId} />
      <Footer />
    </div>
  );
};

export default ProductDetailPage;


