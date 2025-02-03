import EmailIcon from '../assets/mail.svg'
import LinkedInIcon from '../assets/logo-linkedin.svg'
import Link from 'next/link'
import React from "react";
import MenuHref from "./MenuHref";

const Header: React.FC = () => {
    return(
        
        
        <div
            className='
            py-10 md:py-20xw'
        >

            <div
                className='
                text-center md:text-left
                 bg-green-400
                 bg-opacity-70 '
            >
                    <div
                    className="
                            flex-col md:flex-row
                            flex justify-between
                            gap-2
                            font-thin
                            p-5"
                >
                    
                    <Link href={'/'} className="group">
                            <div
                                className="
                            text-5xl
                            font-sans
                            text-amber-100
                            text-opacity-50
                            group-hover:text-amber-400
                            group-hover:text-opacity-100"
                            >
                            Meaghan Lee
                            </div>
                    </Link>
                    <div
                        className='
                        self-center md:self-end
                        flex
                        gap-4 md:gap-2
                        text-3xl med:text-4xl
                        text-amber-100
                        text-opacity-50'
                    >
                        <MenuHref
                            className="group-hover:text-amber-400
                            group-hover:text-opacity-100"
                            href="mailto:meaghan@meaghanlee.com"
                            iconComponent={EmailIcon}
                            iconText="Email"
                            iconTextStyling="text-xs visible md:invisible group-hover:visible"
                        />
                        <MenuHref
                            className="group-hover:text-amber-400
                            group-hover:text-opacity-1000"
                            href="https://www.linkedin.com/in/meaghanelee/"
                            iconComponent={LinkedInIcon}
                            iconText="LinkedIn"
                            iconTextStyling="text-xs visible md:invisible group-hover:visible"
                        />
                    </div>
                </div>
            </div>

    </div>
    )
}

export default Header