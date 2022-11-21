import Image from 'next/image'
import React from 'react'

export default function Gifts() {

    const styles = {
        wrapper: 'wrapper sectionMargin',
        container: 'grid grid-cols-1 lg:grid-cols-2 gap-[4rem] lg:gap-[1rem]',
        left: 'flex justify-center lg:justify-end lg:place-items-start w-full',
        leftImage: 'w-[300px] h-[500px] lg:w-[60%] xl:w-[80%] xl:h-[800px]',
        right: 'flex flex-col-reverse gap-[4rem] lg:gap-0 lg:flex-col',
        rightTop: '',
        rightTopContainer: 'lg:relative w-full h-[550px] flex justify-center lg:block',
        rightImage: 'w-[400px] h-[480px] lg:absolute z-[1] top-0 left-0',
        pinkContainer: 'w-[400px] h-[400px] hidden lg:block bg-customPink lg:absolute z-[0] bottom-0 right-0 mr-[5rem]',
        rightBottom: 'lg:m-[4rem] grid justify-center place-items-center text-center lg:justify-start lg:place-items-start lg:text-start',
        titleContainer: '',
        title: 'title',
        subTitleContainer: '',
        subTitle: 'subTitle pr-8',
    }

    return (
        <div className={styles.wrapper} id="gifts">
            <div className={styles.container}>
                <div className={styles.left}>
                    <Image src="/images/gifts1.jpg" alt='' className={styles.leftImage} width={800} height={1000}/>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightTop}>
                        <div className={styles.rightTopContainer}>
                            <Image src="/images/gifts2.jpg" alt='' className={styles.rightImage} width={800} height={1000}/>
                            <div className={styles.pinkContainer}></div>
                        </div>
                    </div>
                    <div className={styles.rightBottom}>
                        <div className={styles.titleContainer}>
                            <h2 className={styles.title}>Gifts for Her</h2>
                        </div>
                        <div className={styles.subTitleContainer}>
                            <p className={styles.subTitle}>Maecenas magna lectus, finibus sed fermentum et, fringilla ac ex curabitur quis nulla purus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
