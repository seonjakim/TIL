import React from 'react'
import { useQuery } from 'react-query'

const Characters = () => {
  const [characters, setCharacters] = React.useState([])

  const {} = useQuery('characters', fetchCharacters)

  const fetchCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    setCharacters(data.results)
  }
  React.useEffect(() => {
    fetchCharacters()
  }, [])
  return (
    <div>
      {characters.map((character, index) => (
        <div key={index}>{character.name}</div>
      ))}
    </div>
  )
}

export default Characters
