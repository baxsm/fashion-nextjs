import Image from 'next/image'
import React from 'react'

export default function Feature() {

    const styles = {
        wrapper: 'wrapper sectionMargin w-full h-[100vh]',
        container: 'lg:relative w-full h-full',
        pinkCover: 'bg-customPink hidden lg:block lg:absolute top-[2rem] w-[90%] h-[650px] right-0',
        image1Container: 'lg:absolute top-0 mb-[2rem] lg:mb-0',
        image1: 'w-full h-full lg:w-[740px] lg:h-[550px] object-cover',
        image2Container: 'pt-[2rem] lg:pt-[4rem] w-full',
        image2: 'w-full h-full xl:w-[400px] xl:h-[400px] object-cover xl:object-contain',
        contentContainer: 'lg:absolute right-[4rem] lg:pt-[8rem] flex flex-col justify-center place-items-center md:place-items-start text-center md:text-start gap-[1.5rem] lg:pr-[1rem]',
        titleContainer: '',
        title: 'title',
        subTitleContainer: '',
        subTitle: 'subTitle',
        buttonContainer: '',
        button: 'buttonSecondary',
    }

    return (
        <div className={styles.wrapper} id="feature">
            <div className={styles.container}>
                <div className={styles.pinkCover}></div>
                <div className={styles.image1Container}>
                    <Image src="/images/feature1.jpg" width={1500} height={1500} alt='' className={styles.image1} />
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.titleContainer}>
                        <h2 className={styles.title}>Color Winter</h2>
                    </div>
                    <div className={styles.subTitleContainer}>
                        <p className={styles.subTitle}>Happy hues to guide you through the holiday season</p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button}>show more</button>
                    </div>
                    <div className={styles.image2Container}>
                        <Image src="/images/feature2.jpg" width={1500} height={1500} alt='' className={styles.image2} />
                    </div>
                </div>
            </div>
        </div>
    )
}
