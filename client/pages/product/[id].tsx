import { NextPageContext, GetServerSidePropsResult } from "next";
import { ProductPage, ProductPageProps } from "../../components/ProductPage";
import { useProductQuery } from "../../hooks/useProductQuery";

export default ProductPage;

export async function getServerSideProps(
  context: NextPageContext
): Promise<GetServerSidePropsResult<ProductPageProps>> {
  const id = context.query.id as string;

  try {
    // Dynamic value here for futureproofing
    const product = await useProductQuery(id);

    if (!product) {
      throw new Error(`Product ${id} not found`);
    }

    return {
      props: { product },
    };
  } catch (error) {
    return {
      // TODO: Handle graphQL errors and such
      notFound: true,
    };
  }
}
