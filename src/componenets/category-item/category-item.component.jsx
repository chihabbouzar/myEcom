import "./category-item.style.scss"


const CategoryItem = ({category}) =>{
    const    {title,imageUrl} = category;
    console.log(title);
    return(
        <div className="category-container">
					<div className="background-image" style={{backgroundImage : `url(${category.imageUrl})`}}></div>
					<div className="category-body-container">
						<h2>{title}</h2>
						<p>SHOP NOW</p>
					</div>
				</div>
    )
}

export default CategoryItem