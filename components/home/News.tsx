import Image from 'next/image'
import React from 'react'

export default function News() {

    const styles = {
        wrapper: 'wrapper sectionMargin',
        top: 'flex flex-col xl:flex-row gap-[4rem] xl:gap-[0] justify-center place-items-center',
        topLeft: 'xl:relative z-[1]',
        brownContainer: 'bg-customBrown w-[450px] h-[630px] hidden xl:block',
        topLeftImageContainer: 'xl:absolute top-[-4rem] right-[-1rem]',
        topLeftImage: 'w-[98%] h-[320px] md:w-[428px] md:h-[645px] object-cover',
        topRight: 'xl:relative w-[100%] z-[0]',
        pinkContainer: 'bg-customPink w-[92%] h-[450px] hidden xl:block',
        topRightContent: 'flex flex-col justify-center place-items-center md:justify-start md:place-items-start gap-[1.5rem] xl:absolute left-[5rem] xl:bottom-[14rem]',
        titleDimmed: 'titleDimmed',
        titleContainer: '',
        title: 'title',
        subTitleContainer: '',
        subTitle: 'subTitle md:pr-[12rem] md:text-start text-center',
        buttonContainer: '',
        button: 'buttonSecondary',
        bottom: 'grid place-items-center gap-[4rem] xl:gap-0 grid-cols-1 xl:grid-cols-2 xl:pl-[4rem] xl:pr-[4rem] w-full h-full',
        bottomLeft: 'flex flex-col gap-[1rem] w-full mt-[4rem] text-center md:text-start',
        bottomTitleContainer: '',
        bottomTitle: 'font-[700] capitalize text-[1.875rem]',
        bottomSubTitleContainer: '',
        bottomSubTitle: 'subTitle',
        bottomRight: 'w-full xl:w-[60%] xl:relative flex justify-center xl:block',
        bottomRightImageContainer: 'xl:absolute bottom-[-10rem] right-0 w-full',
        bottomRightImage: 'w-full h-[580px] md:w-[355px] md:h-[460px] object-cover',
    }

    
    return (
        <div className={styles.wrapper} id="news">
            <div className={styles.top}>
                <div className={styles.topLeft}>
                    <div className={styles.brownContainer}></div>
                    <div className={styles.topLeftImageContainer}>
                        <Image src="/images/fashion-news1.jpg" alt='' className={styles.topLeftImage} width={1000} height={1000} />
                    </div>
                </div>
                <div className={styles.topRight}>
                    <div className={styles.pinkContainer}></div>
                    <div className={styles.topRightContent}>
                        <h4 className={styles.titleDimmed}>Fashion News</h4>
                        <div className={styles.titleContainer}>
                            <h2 className={styles.title}>New This Week</h2>
                        </div>
                        <div className={styles.subTitleContainer}>
                            <p className={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices, sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices</p>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}>show more</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottomLeft}>
                    <div className={styles.bottomTitleContainer}>
                        <h3 className={styles.bottomTitle}>Woman&apos;s Dresses</h3>
                    </div>
                    <div className={styles.bottomSubTitleContainer}>
                        <p className={styles.bottomSubTitle}>How to wear this season&apos;s best dresses? Try a matching two-piece set with leather mules for a totally of-the-moment look. Or a boho maxi with maximum impact when paired with the right long necklace. We have cute casual day dresses that are perfect for a busy day of meeting with friends,</p>
                    </div>
                </div>
                <div className={styles.bottomRight}>
                    <div className={styles.bottomRightImageContainer}>
                        <Image src="/images/fashion-news2.jpg" alt='' className={styles.bottomRightImage} width={1000} height={1000} />
                    </div>
                </div>
            </div>
        </div>
    )
}
