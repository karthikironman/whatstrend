import "./Admin.scss";
import data from "../categories/data.json";
const Admin = () => {

    return (
        <div className="admin-wrapper">
            <h1 className="admin-wrapper-main-heading">Categories and Choices</h1>
            {
                data.ha.map((x, index) => {
                    return <Category sl_no={index+1} key={index} category_name={x.name} choices={x.choice} />
                })
            }

        </div>
    )
}
const Category = ({ sl_no = 0, category_name, choices }) => {
    return (
        <div className="admin-category-wrapper">
            <div className="serial_no"><p>{sl_no}</p></div>
            <div className="main-item">
                <p className="main-item-heading">{category_name}</p>
                <p className="choice-main-title">Choices</p>
                <div className="choice-scroll-wrapper">
                    {
                        choices.map((x, index) => {
                            return <Choice key={index} name={x.name} icon_img={x.img} influencer_img={x.influencer} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const Choice = ({ name, icon_img = "", influencer_img = "" }) => {
    return (
        <div className="choice-wrapper">
            <img className="icon_img" src={icon_img} />
            <p>{name}</p>
            <div className="dummy-wrapper">
                <img className="influencer_img" src={influencer_img} />
                <div className="image-ruler"></div>

            </div>

        </div>
    )
}
export default Admin;