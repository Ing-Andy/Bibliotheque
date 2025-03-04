import React from 'react'

export default function Myapi({CodeBar}) {
    const api = async () => {
        const data = await fetch(`https://metasbooks.fr/api/lookup_metas.php?ean=${CodeBar}&apikey=e312be959513512ee7a0ff28d6249015I&format=json`) 
        // const response = await data.json()
        console.log('donnee recuperer :',data)
    }

  return (
    <div></div>
  )
}
