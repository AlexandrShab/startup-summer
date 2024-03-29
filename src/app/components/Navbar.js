import '../globals.css'
import Link from 'next/link'
import styles from './Navbar.module.css'


export function Navbar({currentPage}) {
    var link1
    var link2
    if (currentPage == 'vacancies') {link1 = 'activePage'; link2 = 'linkPage'}
     
    if (currentPage == 'favorites') {link2 = 'activePage'; link1 = 'linkPage'}
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.navbar}>
                    <div className={styles.logo}>
                        <div className={styles.img}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.039 4.81473C9.08945 0.423548 3.45945 -1.27661 1.13587 1.02923C-1.18771 3.33508 0.469264 8.97794 4.81473 14.961C0.423547 20.9105 -1.27661 26.5405 1.02923 28.8641C3.33507 31.1877 8.97793 29.5307 14.9609 25.1852C20.9105 29.5764 26.5405 31.2766 28.8641 28.9708C31.1877 26.6649 29.5307 21.022 25.1852 15.039C29.5764 9.08944 31.2766 3.45943 28.9708 1.13584C26.6649 -1.18775 21.022 0.469239 15.039 4.81473Z" fill="#5E96FC"/>
                            </svg>

                        </div>
                        <div className={styles.brand}>
                            Jobored
                        </div>
                    </div>
                    <div className={styles.links}>
                        <div className={styles[link1]+ ' firstLink'}>
                            <Link href="/">Поиск Вакансий</Link>
                        </div>
                        <div className={styles[link2]}>
                            <Link href="/favorites">Избранное</Link>
                        </div>
                    </div>
                </div>
            </nav>
            
        </>
    )
}