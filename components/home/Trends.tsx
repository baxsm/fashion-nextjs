import Link from 'next/link'
import React from 'react'

export default function Trends() {

    const styles = {
        wrapper: 'sectionMargin bg-fashionTrends w-full h-full p-[4rem] md:p-[6rem]',
        container: 'flex flex-col justify-center place-items-center text-center lg:ml-[10rem] lg:my-[2rem] lg:justify-start lg:place-items-start lg:text-start gap-[2rem]',
        titleContainer: '',
        title: 'title',
        subTitleContainer: '',
        subTitle: 'subTitle xl:pr-[25rem]',
        buttonContainer: 'w-[fit-content] mt-[2rem]',
        button: 'buttonAnchor',
    }

  return (
    <div className={styles.wrapper} id='trends'>
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>Fashion Trends</h2>
            </div>
            <div className={styles.subTitleContainer}>
                <p className={styles.subTitle}>We curate our selection to spark your creativity and individuality. Each item can be styled a dozen different ways, complementing a wide range of aesthetics, from hippie-inspired looks to edgier vibes. So you can discover the foundations and finishing touches for any outfit. </p>
            </div>
            <div className={styles.buttonContainer}>
                <Link href='/' className={styles.button}>view collection</Link>
            </div>
        </div>
    </div>
  )
}
