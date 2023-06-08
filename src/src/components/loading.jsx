import { Player } from '@lottiefiles/react-lottie-player';
import { createRef } from 'react';

export default function Loading() {

    const ref = createRef()

    return (
        <Player
            ref={ref}
            autoplay
            loop
            src="https://assets10.lottiefiles.com/private_files/lf30_mzwrlhjq.json"
            style={{ height: size, width: size, marginTop: marginTop}}
        >
        </Player>
    )
}

const size = window.innerWidth < 374 ? '150px':'300px'

const marginTop  =  window.innerWidth < 374 ? '60%':'9%'