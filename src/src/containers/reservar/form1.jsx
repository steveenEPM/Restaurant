import { useContext } from "react"
import { contextReserv } from "../../context/contextReserv"



const Form1 = () => {

    const {changeCome,changeDate,changeTime,disTime,clickButt} = useContext(contextReserv)

    return (
        <form className="form1" onSubmit={clickButt}>
            <div className="row comensal">
                <span>Comensales</span>
                <select name="comensal" onChange={changeCome}>
                    {
                        [1, 2, 3, 4, 5, 6, 7].map((key, index) => (
                            <option value={key} key={index} > {key} comensal</option>
                        ))
                    }
                </select>
            </div>
            <div className="row dates" >
                <span style={{ marginRight: "40px" }}>Fecha</span>
                <input type="date" onChange={changeDate} required/>
            </div>
            <div className="row time">
                <span style={{ marginRight: "44px" }}>Hora</span>
                <input type="time" onChange={changeTime} disabled={disTime} required/>
            </div>
            <button  type="submit">Continuar</button>
        </form>
    )
}

export default Form1