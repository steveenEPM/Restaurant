import { useNavigate } from "react-router-dom"
import Logotipo from "../components/logotipo"


export default function BarraMen(){


    const navigate = useNavigate()

    const goAbout = ()=> window.location.href = "https://portafolio-eight-henna.vercel.app/"

    return(
        <div className="headers">
            <div className="container1">
                <Logotipo/>
                <div className="buttons">
                    <button className="btn" onClick={()=> navigate('/')}>Home</button>
                    <button className="btn" onClick={goAbout}>About me</button>
                    <button className="btn" onClick={()=>navigate('/menu')}>Main</button>
                </div>
            </div>

            <div className="container2">
                <button className="btn" onClick={()=>navigate('/reservar')}>Reserve</button>
            </div>

        </div>
    )

}