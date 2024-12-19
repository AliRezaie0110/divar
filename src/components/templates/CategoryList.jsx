import { useQuery } from "@tanstack/react-query"
import { getCategory } from "../../services/admin"

import Loader from "./../../components/modules/Loader"
import styles from "./CategoryList.module.css"

function CategoryList() {
    const { isLoading, data } = useQuery(["get-categories"], getCategory)
    console.log({ isLoading, data });

    return (
        <div className={styles.list}>
            {isLoading ? <Loader /> : data.data.map(i =>
                <div key={i._id}>
                    <img src={`${i.icon}.svg`} alt="" />
                    <h5>{i.name}</h5>
                    <p>slug : {i.slug}</p>
                </div>)}
        </div>
    )
}



export default CategoryList
