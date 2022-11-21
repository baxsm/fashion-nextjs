import Link from 'next/link'
import React from 'react'

export default function Footer() {
    const styles = {
        footer: 'flex justify-center place-items-center text-center bg-[#353535] p-[1rem]',
        text: 'text-[1.25rem] font-[700] text-[#fff]'
    }

    return (
        <footer className={styles.footer}>
            <Link href='https://github.com/baxsm' target="_blank" className={styles.text}>&copy; B A X S M</Link>
        </footer>
    )
}
