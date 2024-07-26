import "./style.css";
import { Link } from "react-router-dom";
import { TCategory } from "@/types/category";


function Category({ title, img, prefix }: TCategory) {
  return (
    <>
      <div className="category">
        <Link to={`/categories/products/${prefix}`}>
          <img src={img} alt={title} className="categoryImg" />
          <h4 className="categoryTitle">{title}</h4>
        </Link>
      </div>
    </>
  );
}

export default Category;
