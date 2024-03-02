import React, { useState } from 'react'
import styles from './index.module.css'

function Pokemon() {
  const [data, setData] = useState([])
  const getData = async() =>{
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=6');
    let res = await response.json()
    setData(res.results)
  }
  getData()
  return (
    <div className={styles.contain}>
      <div className={styles.prevBlock}>
        {data.map((el)=> {
          return (
            <div className={styles.pokemon_cards}>
              <img src={el.url} alt="pokemonImg" />
              <p>{el.name}</p>
            </div>  
          )
        })} 

      </div>
      
    </div>
  )
}

export default Pokemon