import Link from 'next/link'
import React from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

export default function Header() {

    const styles = {
        wrapper: 'wrapper w-full h-full',
        container: 'p-6 flex justify-between place-items-center',
        logoContainer: '',
        logo: 'font-[700] align-left text-[1.875rem]',
        menuLogoContainer: 'align-right',
        menuLogo: 'text-[1.8rem] hover:text-darkHover cursor-pointer'
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <h3 className={styles.logo}>
                        <Link href="/">
                            Fashion
                        </Link>
                    </h3>
                </div>
                <div className={styles.menuLogoContainer}>
                    <AiOutlineMenu className={styles.menuLogo}/>
                </div>
            </div>
        </div>
    )
}
