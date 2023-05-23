"use client"
import Link from 'next/link'
import styles from './Items.module.css'
import { SaveBtnStar } from './SaveBtnStar'
import { useLocalStorage } from '@mantine/hooks'

/*
Vacancies.getInitialProps = async () =>{
    
      return { vacancies: vacancies.objects }
  }*/
export function Items({currentItems}){
    const [id, setId, removeId] = useLocalStorage({key:0,value:0})
    
    
    return (
        <div className={styles.ul}>
           
                {  
                    currentItems.map(vacancy =>(
                    <li key={vacancy.id} className={styles.li}
                        data-elem={'vacancy-' + vacancy.id}
                    >
                        <div className={styles.head}>
                            <Link className={styles.profession} href={'/vacancy/[id]'} as = {`/vacancy/${vacancy.id}`}>{vacancy.profession}</Link>
                            <SaveBtnStar 
                                onClick={console.log(vacancy.id)}
                            />
                        </div>
                        
                        
                        
                        <div className={styles.work}>
                            <div>з/п {vacancy.payment_from} - {vacancy.payment_to} {vacancy.currency}</div>
                            <div className={styles.point}>•</div>
                            <div>  {vacancy.type_of_work.title}</div>
                        </div>
                        <div className={styles.place}>
                            <div className={styles.icon}>
                                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.714 12.8807C11.9335 13.6612 10.3013 15.2935 9.17814 16.4166C8.52727 17.0675 7.47304 17.0678 6.82217 16.4169C5.7186 15.3134 4.11797 13.7127 3.28593 12.8807C0.682439 10.2772 0.682439 6.05612 3.28593 3.45262C5.88943 0.849126 10.1105 0.849126 12.714 3.45262C15.3175 6.05612 15.3175 10.2772 12.714 12.8807Z" stroke="#ACADB9" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M10.5 8.16667C10.5 9.54738 9.38069 10.6667 7.99998 10.6667C6.61927 10.6667 5.49998 9.54738 5.49998 8.16667C5.49998 6.78595 6.61927 5.66667 7.99998 5.66667C9.38069 5.66667 10.5 6.78595 10.5 8.16667Z" stroke="#ACADB9" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className={styles.town}>{vacancy.town.title}</div>
                        </div>
                    </li>
                  
                ))}              
        </div>
    )
              
  }
 