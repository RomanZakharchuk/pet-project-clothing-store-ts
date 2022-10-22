import { FC } from "react";

import css from "./Directory.module.scss";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import { ICategoryInterface } from "../../interfaces/categorie.interface";

type PropsType = {
    categories: ICategoryInterface[];
};

const Directory: FC<PropsType> = ({categories}) => {
    return (
        <div className={css.DirectoryContainer}>
            {categories.map(category => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    )
}

export { Directory };