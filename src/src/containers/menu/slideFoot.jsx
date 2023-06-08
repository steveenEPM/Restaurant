import { useState } from "react"
import SliderItem from "../../components/sliderItem"
import { useEffect, useTransition } from "react";


export default function SliderFoot({ data }) {

    const [state, setState] = useState(0);

    const [isPending, startTransition] = useTransition()


   

    return (
        <div className="slideshow">
            <div className="slideshow-container">
                {
                    data.map((key, index) => {

                        return (
                            <div key={index} className={index === state ? 'mySlides fade' : 'mySlides'}>
                                <SliderItem id={key.idMeal}src={key.strMealThumb} strMeal={key.strMeal} strCategory={key.strCategory}
                                    strTags={key.strTags}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div className="slderItem">
                {
                    data.map((key, index) => {
                        return (
                            <label htmlFor="radio1" key={index} className={index == state ? "manual-btn" : ""} onClick={() => setState(index)}></label>
                        )
                    })
                }
            </div>

        </div>
    )

}


