import { useContext } from "react"
import { contextReserv } from "../../context/contextReserv"

export default function Form2() {

    const { data1,change,clickButt2} = useContext(contextReserv)

    return (
        <form className="form2" onSubmit={clickButt2}>

            <div className="data1">
                <div className="colI">
                    <img width={iconSize} height={iconSize} src={src1} alt="user--v1" />
                    <span>{data1.comensal} comensal</span>
                </div>
                <div className="colI">
                    <img width={iconSize} height={iconSize} src={src2} alt="calendar--v1" />
                    <span>{data1.dates} </span>
                </div>
                <div className="colI">
                    <img width={iconSize} height={iconSize} src={src3} alt="clock--v1" />
                    <span>{data1.time} </span>
                </div>
            </div>

            <div className="containerForm">
                <div className="colF">
                    <span style={{marginRight:12}}>Nombre</span>
                    <input type="text" placeholder="nombre y apellido" aria-label="nameInput" name="names" max={15} onChange={change} required />
                </div>
                <div className="colF">
                    <span style={{marginRight:7}}>Telefono</span>
                    <input type="number" placeholder="00 0000 000 00" aria-label="namePhone" name="phones" onChange={change} required />
                </div>
                <button type="submit">Confirmar</button>
            </div>
        </form>

    )

}


const iconSize = 30

const color = "9c650c"

const src1 = `https://img.icons8.com/ios-glyphs/30/${color}/user--v1.png`

const src2 = `https://img.icons8.com/material-outlined/24/${color}/calendar--v1.png`

const src3 = `https://img.icons8.com/ios-filled/50/${color}/clock--v1.png`