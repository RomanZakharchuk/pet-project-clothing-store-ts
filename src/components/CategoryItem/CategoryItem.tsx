import { FC } from "react";

import css from './CategoryItem.module.scss';
import { ICategoryInterface } from "../../interfaces/categorie.interface";

type PropsType = {
    category: ICategoryInterface
}

const CategoryItem: FC<PropsType> = ({ category }) => {
    const { title, imageUrl } = category;

    return (
        <div className={css.CategoryContainer}>
            <div className={css.BackgroundImage} style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className={css.CategoryBodyContact}>
                <h2>{title}</h2>
                <p>Show Now</p>
            </div>
        </div>
    )
};

export { CategoryItem };