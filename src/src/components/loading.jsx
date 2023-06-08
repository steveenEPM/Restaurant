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
            style={{ height: '300px', width: '300px', marginTop: '9%' }}
        >
        </Player>
    )
}