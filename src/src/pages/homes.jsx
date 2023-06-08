

import BarraMen from "../containers/barra"
import Container1 from "../containers/homes/container1"
import Container2 from "../containers/homes/container2"
import '../styles/homes.css'

export default function Homes() {

    return (
        <>
            <BarraMen />
            <div className="Homes">
                <Container1 />
                <Container2 />
                <div className="circle1" />
                <div className="circle2" />
            </div>


        </>
    )

}

/**
 * 
 *  <div className="Homes">
                <Container1 />
                <Container2 />
            </div>
 */