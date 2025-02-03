import Image from 'next/image'
import BGImage from '../public/rainer_.contour_map.jpeg'
import '@fontsource/nanum-myeongjo'
import React from "react";

const Splash: React.FC = () => {
    return (
        <div>
            <Image
                layout="fill"
                objectFit="cover"
                src={BGImage}
                alt="Ferry on Seattle sound"
            />
        </div>
    )
}

export default Splash
