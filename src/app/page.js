'use client'
import styles from './page.module.css'
import { Navbar } from '@/app/components/Navbar'
import { Filters } from '@/app/components/Filters'
import { Findbar } from '@/app/components/Findbar'
import { Vacancies } from '@/app/components/Vacancies'
import { useState, useEffect } from 'react'



export default function Home() {

  const [vacancies, setVacancies] = useState([])
  useEffect(() => {
    async function getVacancies() {
      const options = {
        method: "GET",
        headers: {
          "Authorization": "Bearer v3.r.137440105.eeb0bc4183784b711e4ad9b3622717a418b7dfb1.b16d6fb16494c582e6dc4e3a693e4ea5754eb0ba",
          "x-secret-key": "GEU4nvd3rej*jeh.eqp",
          "x-api-app-id": "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948"
        }
      }
      const res = await fetch('https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/?count=100', options)
      const data = await res.json(res)

      setVacancies(data.objects)

    }
    getVacancies()
  }, [])

  return (
    <main >
      <Navbar currentPage={'vacancies'}/>
      <div className={styles.content}>
        <div className={styles.all__content}>
          
          <Filters setVacs={setVacancies} />
          
          <div className={styles.vacancies}>
            <Findbar setVacs={setVacancies} />
            <Vacancies itemsPerPage={4} vacancies={vacancies} />
          </div>
        </div>
      </div>


    </main>
  )
  
}
