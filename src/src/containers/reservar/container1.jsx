export default function Descripcion() {

    

    return (
        <div className="container container1">
            <h1>Restaurant S</h1>
            <div className="row" >
                <img width={imgSize} height={imgSize} src={srcImg1} alt="marker" />
                <span>C/ de Pau Claris, 92, 08010 Barcelona, Spain</span>
            </div>
            <div className="row">
                <img width={imgSize} height={imgSize} src={srcImg2} alt="phone" />
                <span>+593 86 452 52 24</span>
            </div>
        </div>
    )
}

const imgSize=35

const imgColor="f7df3f"

const srcImg1 = `https://img.icons8.com/ios-filled/50/${imgColor}/marker.png`

const srcImg2 = `https://img.icons8.com/ios-filled/50/${imgColor}/phone.png`