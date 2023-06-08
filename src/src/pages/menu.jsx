import { useEffect, useMemo, useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"

import SliderFoot from "../containers/menu/slideFoot"
import BarraMen from "../containers/barra"
import apiThem from "../apis/themealdb"
import Category from "../containers/menu/category"
import Loading from "../components/loading"

import '../styles/menus.css'



export default function Menu() {


    const [slider, setSlider] = useState(undefined)

    const [categorias, setCategorias] = useState(undefined)

    const [load, setLoad] = useState(false)

    const navigate = useNavigate()

    useMemo(async () => {

        try {

            const array = []
            for (let index = 0; index < listS.length; index++) {
                let element = listS[index];

                let data1 = await apiThem(`/search.php?s=${element}`).then(e => {
                    let { idMeal, strMeal, strCategory, strTags, strInstructions, strMealThumb } = e.data.meals[0]
                    return { idMeal, strMeal, strCategory, strTags, strInstructions, strMealThumb }
                })

                array.push(data1)
            }

            setSlider(array)

        } catch (error) {
            console.log(error)
        }

    }, [])

    useMemo(async () => {
        try {
            let respons = await apiThem('/categories.php').then(e => {
                return e.data.categories
            })
            setCategorias(respons)
        } catch (error) {
            console.log(error);
        }
    }, [])

    useEffect(() => {

        if (slider && categorias) {
            setTimeout(() => {
                setLoad(true)
            }, 500)
        }

    }, [slider, categorias])


    //Eventos de onClick
    const clickCateg = useCallback((str) => {
        navigate(`/menu/${str}`)
    }, [navigate])

    return (
            <>
                {
                    load ?
                        <>
                            <BarraMen />
                            <div className="menus">
                                {
                                    slider && <SliderFoot data={slider} />
                                }
                                {
                                    categorias && <Category data={categorias} onClick={clickCateg} />
                                }
                            </div>
                        </>
                        :
                        <Loading />
                }
            </>

    )

}

const listS = ["Arrabiata", "Bread and Butter Pudding", "Dundee cake",
    "French Lentils With Garlic and Thyme", "Garides Saganaki"]
