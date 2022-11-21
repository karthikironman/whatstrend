import "./categories.scss";
import categoriesPageImage from "../../assets/category.png";
import BackBtn from "../../widgets/backBtn"
import { useNavigate } from "react-router-dom";
import YourCategories from "../../widgets/yourCategories";
import { useSelector } from "react-redux";
import data from "./data.json"
const Categories = () => {
  const navigate = useNavigate();
  const flavour = useSelector((state) => state.hanaka.flavour)
  return (
    <div className="category-wrapper">

      <div className="category-header">
        <BackBtn onClick={() => { navigate("/home") }} />
        <p className="category-heading">Your Categories</p>
      </div>
      {
        flavour == 'ha' &&
        data.ha.map((x, index) => <YourCategories
          sl_no={index + 1}
          category_name={x.name}
          no_of_votes={(Math.random() * 100).toFixed(0)}
          select_index={x.select_index}
          choice_data={x.choice} />)
      }
      {
        flavour == 'naka' &&
        data.naka.map((x, index) => <YourCategories
          sl_no={index + 1} category_name={x.name}
          no_of_votes={(Math.random() * 100).toFixed(0)}
          select_index={x.select_index}
          choice_data={x.choice} />)
      }

      {/* <img src={categoriesPageImage}/> */}
      <div>
        
      </div>
    </div>
  )
}
export default Categories;