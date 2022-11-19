import Image from 'next/image'
import React from 'react'

export default function Collection() {

    const styles = {
        wrapper: 'wrapper sectionMargin',
        container: 'grid md:grid-cols-2 gap-[2rem]',
        left: 'flex flex-col place-items-center md:place-items-start gap-[2rem]',
        leftImageContainer: '',
        leftImage: 'object-cover w-full h-full md:w-[300px] md:h-[300px] md:object-top',
        contentContainer: 'flex flex-col text-center md:text-start place-items-center md:place-items-start gap-[2rem]',
        titleContainer: '',
        title: 'title',
        subTitleContainer: '',
        subTitle: 'subTitle pr-4',
        buttonContainer: '',
        button: 'buttonPrimary',
        right: 'relative',
        rightImageContainer: 'flex justify-center  md:absolute top-0 left-0 right-0 z-1',
        rightImage: 'object-cover w-full h-full md:w-[500px] md:h-[650px] object-top relative',
        pinkContainer: 'bg-customPink hidden md:block  md:absolute w-[250px] h-[400px] right-0 z-0 bottom-[7rem]',
        brownContainer: 'bg-customBrown hidden md:block  md:absolute w-[250px] h-[400px] left-0 z-0 bottom-[0rem]',
    }

  return (
    <div className={styles.wrapper} id="collection">
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.leftImageContainer}>
                    <Image src="/images/collection1.jpg" alt="" width={200} height={500} className={styles.leftImage} />
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.titleContainer}>
                        <h2 className={styles.title}>New Collection</h2>
                    </div>
                    <div className={styles.subTitleContainer}>
                        <p className={styles.subTitle}>The brand offers a wide range of products from apparel, to accessories, intimates, outerwear, home, and beauty – all reflecting a high level of quality, invoking attributes of femininity, spirit, and creativity in its design, while creating the perfect festival clothing.</p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button}>View Collection</button>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.pinkContainer}></div>
                <div className={styles.brownContainer}></div>
                <div className={styles.rightImageContainer}>
                    <Image src="/images/collection2.jpg" className={styles.rightImage} width={1500} height={1500} alt=''/>
                </div>
            </div>
        </div>
    </div>
  )
}
