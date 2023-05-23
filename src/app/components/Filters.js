
import { useEffect, useState } from 'react'
import styles from './Filters.module.css'
import { Button, Select, NumberInput } from '@mantine/core'


export function Filters({setVacs}) {
    const [catalogues, setCatalogues] = useState([])
    const [catSelected, setCatSelected] = useState([])
    const [salaryFrom, setSalaryFrom] = useState(0)
    const [salaryTo, setSalaryTo] = useState(0)
    useEffect(() => {
        async function getCatalogues() {
            const options = {
                method: "GET",
                headers: {
                    "Authorization": "Bearer v3.r.137440105.eeb0bc4183784b711e4ad9b3622717a418b7dfb1.b16d6fb16494c582e6dc4e3a693e4ea5754eb0ba",
                    "x-secret-key": "GEU4nvd3rej*jeh.eqp",
                    "x-api-app-id": "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948"
                }
            }
            const res = await fetch('https://startup-summer-2023-proxy.onrender.com/2.0/catalogues/', options)
            const data = await res.json(res)
            console.log(data)
            let cat = []
            for(let i = 0; i < data.length; i++){
                let catItem = {"value":data[i].key, "label": data[i].title_trimmed}
                cat.push(catItem)
            }

            setCatalogues(cat)

        }
        getCatalogues()
    }, [])
    async function getFiltered(){
        const options = { 
            method: "GET",
            headers: { 
                "Authorization": "Bearer v3.r.137440105.eeb0bc4183784b711e4ad9b3622717a418b7dfb1.b16d6fb16494c582e6dc4e3a693e4ea5754eb0ba",
                "x-secret-key": "GEU4nvd3rej*jeh.eqp",
                "x-api-app-id": "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948"
            }
        }
        let params = 'count=100'
        if (salaryFrom){params += '&payment_from='+salaryFrom}
        if (salaryTo){params += '&payment_to='+salaryTo}
        if (catSelected){params += '&catalogues='+catSelected}
        console.log(catSelected)
      const res = await fetch('https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/?'+ params, options)
      const data = await res.json(res)
      console.log(data.objects)
      setVacs(data.objects)
       
    }
    
    
    
    return (
        <div className={styles.filters}>

            <div className={styles.block__name}>Фильтры</div>
            <Select className={styles.input}
                data-elem='industry-select'
                onChange={ setCatSelected }
                label='Отрасль'
                placeholder='Выберите отрасль'
                data={catalogues}
                
                
            />
            <NumberInput className={styles.input}
                data-elem='salary-from-input'
                onChange={ setSalaryFrom }
                label='Оклад'
                defaultValue={0}
                min={0}
                step={1000}
                icon={'От'}
                value={salaryFrom}
            />
            <NumberInput className={styles.input}
                data-elem='salary-to-input'
                onChange={ setSalaryTo }
                defaultValue={0}
                min={salaryFrom}
                step={1000}
                icon={'До'}
                value={salaryTo}
            />
            <Button className={styles.btn}
                data-elem='search-button'
                onClick={ getFiltered }
            >Применить</Button>

        </div>
    )
}