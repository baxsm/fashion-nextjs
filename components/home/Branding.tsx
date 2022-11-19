import Link from 'next/link'
import React from 'react'

export default function Branding() {


    const styles = {
        wrapper: 'wrapper sectionMargin w-full h-full flex justify-center place-items-center',
        container: 'text-center flex flex-col justify-center place-items-center gap-[1.5rem] md:p-[20px] lg:p-[80px] xl:p-[250px]',
        titleContainer: '',
        title: 'title',
        subTitleContainer: '',
        subTitle: 'subTitle',
        buttonContainer: '',
        button: 'buttonAnchor',
    }

    return (
        <div className={styles.wrapper} id="branding">
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>Bohemian Inspired Clothes For Women</h2>
                </div>
                <div className={styles.subTitleContainer}>
                    <p className={styles.subTitle}>Our unique boho clothes are influenced by our globe-trotting trips and desk-side daydreams alike. We choose clothes that perfectly hint at hippie styles of decades past, while offering a fresh take on modern fashion. A one-of-a-kind mix of the best of both worlds. These bold styles are the free spirit&apos;s solution to dressing dilemmas no matter the occasion.</p>
                </div>
                <div className={styles.buttonContainer}>
                    <Link href='/' className={styles.button}>view collection</Link>
                </div>
            </div>
        </div>
    )
}
