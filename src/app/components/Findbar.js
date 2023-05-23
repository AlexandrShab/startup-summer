"use client"
import styles from './Findbar.module.css'
import { Button, Input } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { useState } from 'react'

export function Findbar({setVacs}) {
    
    const [vacancy, setVacancy] = useState('')

    const searchVacancy = e => {
        e.preventDefault()
        //console.log(vacancy)
   
         async function getVacancy(){
         const options = { 
             method: "GET",
             headers: { 
                 "Authorization": "Bearer v3.r.137440105.eeb0bc4183784b711e4ad9b3622717a418b7dfb1.b16d6fb16494c582e6dc4e3a693e4ea5754eb0ba",
                 "x-secret-key": "GEU4nvd3rej*jeh.eqp",
                 "x-api-app-id": "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948"
             }
         }
       const res = await fetch('https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/?count=100&keyword='+vacancy, options)
       const data = await res.json(res)
       
       setVacs(data.objects)
        console.log(data)
     }
     getVacancy()
     setVacancy('')
   }
    return (
        <div className={styles.findbar}>
            
                <Input
                    data-elem='search-input'
                    onChange={e => { setVacancy(e.target.value) }}
                    onKeyDown={e => { if (e.key === 'Enter') { searchVacancy(e) } }}
                    value={vacancy}
                    className={styles.input}
                    icon={<IconSearch />}
                    placeholder='Введите нзвание вакансии'
                    size='lg'
                    rightSection={
                        <Button className={styles.btn}
                            data-elem='search-button'
                            radius='md'
                            onClick={e => { searchVacancy(e) }}
                        >Поиск</Button>
                    }
                />
            
        </div>
    )
}