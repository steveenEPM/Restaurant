import BarraMen from "../containers/barra"
import Descripcion from "../containers/reservar/container1"
import Formulario from "../containers/reservar/formulario"
import { contextReserv } from "../context/contextReserv"
import { useState } from "react"
import '../styles/reservar.css'
import '../styles/btn.css'




export default function Reservar() {

    const [index, setIndex] = useState(1)
    const [data1, setData1] = useState({
        comensal: 1,
        dates: "",
        time: ""
    })

    const [data2, setData2] = useState({
        names: "",
        phones: ""
    })
    //Dislate
    const [disTime, setDisTime] = useState(true)
    const [disdBtn1, setDisBtn1] = useState(true)

    /**Formulario 1 */
    //Numero de comensal comnesal 
    const changeCome = (e) => {
        let value = e.target.value
        // eslint-disable-next-line 
        setData1({ ...data1, ["comensal"]: value })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }
    //Valor del Dia
    const changeDate = (e) => {
        let value = e.target.value
         // eslint-disable-next-line 
        setData1({ ...data1, ["dates"]: value })
        setDisTime(false)
    }

    const changeTime = (e) => {
        let value = e.target.value
         // eslint-disable-next-line 
        setData1({ ...data1, ["time"]: value })
        setDisBtn1(false)
    }

    /**Formulario 2*/
    const change = (e) => {
        let { name, value } = e.target
        // eslint-disable-next-line 
        setData2({ ...data2, [name]: value })
    }


    //Botom 1 
    const clickButt = e => {
        e.preventDefault()
        setIndex(2)
    }

    //Botom 2
    const clickButt2 = e => {
        e.preventDefault()
        setDisTime(true)
        setDisBtn1(true)
        setIndex(1)
        alert("Has reservado para la fecha " + data1.dates + " a las " + data1.time)
    }

    return (
        <contextReserv.Provider value={{ changeCome, changeDate, changeTime, disTime, disdBtn1, clickButt, data1, change, clickButt2 }}>
            <>
                <BarraMen />
                <div className="reservar">
                    <Descripcion />
                    <Formulario index={index} />
                </div>
            </>
        </contextReserv.Provider>
    )

}