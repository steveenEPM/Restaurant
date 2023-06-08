// eslint-disable-next-line react-hooks/exhaustive-deps
import { useState, useMemo, useEffect } from "react"
import { useParams} from "react-router-dom"

import BarraMen from "../containers/barra"
import Loading from "../components/loading"
import apiThem from "../apis/themealdb"
import '../styles/platillos.css'

export default function Platillos() {

    const [load, setLoad] = useState(true)
    const [data, setData] = useState(undefined)
    const [title, setTitle] = useState('')

    const params = useParams()

 // eslint-disable-next-line
    useMemo(async () => {
        try {
            const { id } = params
            setTitle(id)

            let respons = await apiThem(`/filter.php?c=${id}`).then(e => {
                return e.data.meals
            })
            console.log(respons);
            setData(respons)

        } catch (error) {
            console.log(error);
        }
    }, [params])

    useEffect(() => {
        if (data) {
            setTimeout(()=>setLoad(false),700)
        }
    }, [data])



    return (
        <>
            {
                !load ?
                    <>
                        <BarraMen />
                        <div className="platillos">
                            <h1>{title} foods</h1>
                            <div className="container-platillos">
                                {
                                    data && data.map((key,index)=>(
                                        <div style={{backgroundImage:`url(${key.strMealThumb})`}} className="item-container" key={index}>
                                            <div>
                                                <span>
                                                    {key.strMeal}
                                                </span>
                                                <span style={{fontWeight:"bold"}}>
                                                    $ {(key.idMeal/3000).toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </>
                    : <Loading />
            }
        </>
    )

}