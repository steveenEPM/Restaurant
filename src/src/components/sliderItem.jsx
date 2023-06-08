


const SliderItem = ({ id,src, strMeal, strCategory, strTags }) => {


    return (
        <>
            <div className="container1">
                <strong>{strMeal}</strong>
                <div>
                    <div className="col">
                        <span>
                            Categoria
                        </span>
                        <span>
                            {strCategory}
                        </span>
                    </div>
                    <div className="col">
                        <span>
                            Etiqueta
                        </span>
                        <span>
                            {strTags}
                        </span>
                    </div>
                    <div className="buttons">
                      <span>${(id/3000).toFixed(2)}</span>
                    </div>
                </div>
            </div>
            <div className="container2">
                <img src={src} alt={src} width={750} height={750} />
            </div>
        </>

    )
}

export default SliderItem