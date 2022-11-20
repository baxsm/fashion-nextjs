import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import ReactModal from 'react-modal'

export default function Header() {

    const navList = [
        {
            title: 'Collection',
            href: '#collection',
        },
        {
            title: 'Feature',
            href: '#feature',
        },
        {
            title: 'Branding',
            href: '#branding',
        },
        {
            title: 'Fashion News',
            href: '#news',
        },
        
    ]

    const styles = {
        wrapper: 'wrapper w-full h-full',
        container: 'py-6 flex justify-between place-items-center',
        logoContainer: '',
        logo: 'font-[700] align-left text-[1.875rem]',
        menuLogoContainer: 'align-right',
        menuLogo: 'text-[1.8rem] hover:text-darkHover cursor-pointer',
        containerModal: 'p-6',
        openIcon: 'text-[1.5rem] text-dark hover:text-dark2 cursor-pointer',
        modal: 'md:max-w-[250px] fixed left-0 right-0',
        modalCloseContainer: 'flex justify-end pb-[1rem]',
        closeIcon: 'text-[#fff] text-[1.5rem] hover:text-dark2 cursor-pointer',
        contentUl: 'flex flex-col gap-[1.5rem] justify-center place-items-center',
        contentLi: '',
        anchor: 'text-[#fff] hover:text-dark2 text-[1.25rem] tracking-[1px] uppercase',
        content: '',
    }


    const [modalActive, setModalActive] = useState(false)

    const openModal = () => {
        setModalActive(true)
    }

    const closeModal = () => {
        setModalActive(false)
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
                    <AiOutlineMenu className={styles.menuLogo} onClick={() => openModal()}/>
                </div>
            </div>
            <ReactModal
                isOpen={modalActive}
                shouldCloseOnEsc={true}
                shouldCloseOnOverlayClick={true}
                onRequestClose={closeModal}
                overlayClassName="modalOverlay"
                className={"reactModal " + styles.modal}
                closeTimeoutMS={500}
                ariaHideApp={false}
            >
                <div className={styles.containerModal}>
                    <div className={styles.modalCloseContainer}>
                        <AiOutlineClose className={styles.closeIcon} onClick={() => closeModal()} />
                    </div>
                    <div className={styles.content}>
                        <ul className={styles.contentUl}>
                            {
                                navList.map((item, index) => {
                                    return (
                                        <li key={index} className={styles.contentLi}>
                                            <a href={item.href} className={styles.anchor} onClick={() => closeModal()}>{item.title}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </ReactModal>
        </div>
    )
}
