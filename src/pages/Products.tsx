import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useAppSelector } from "@/store/hooks";
import { TProduct } from "@/types/product";
import {
  actGetProductsByCatPrefix,
  productCleanUp,
} from "@/store/products/productsSlice";
import Product from "@/components/ecommerce/product/Product";
import Loading from "@/components/feedback/loading/Loading";
import GridList from "@/components/common/gridList/GridList";

function products() {
  const params = useParams();
  const dispatch = useDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);

  useEffect(() => {
  dispatch(actGetProductsByCatPrefix(params.prefix as string));

    return () => {
      dispatch(productCleanUp());
    };
  }, [dispatch, params]);


  return (
      <Loading status={loading} error={error}>
        <GridList<TProduct>
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
  );
}

export default products;
