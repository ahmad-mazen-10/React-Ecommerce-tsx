import { Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { actGetCategories } from "@/store/categories/categoriesSlice";
import { TCategory } from "@/types/category";
import Loading from "@/components/feedback/loading/Loading";
import GridList from "@/components/common/gridList/GridList";
import Category from "@/components/ecommerce/category/Category";

function Categories() {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);



  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList<TCategory>
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
}

export default Categories;
