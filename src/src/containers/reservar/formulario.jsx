import Form1 from "./form1"
import Form2 from "./form2"

export default function Formulario({ index }) {

    return (
        <div className="container container2">
            {
                index === 1?
                    <Form1 />
                    :
                    <Form2 />
            }
        </div>
    )

}