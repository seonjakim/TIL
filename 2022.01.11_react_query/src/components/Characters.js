import React from 'react'
import { useQuery } from 'react-query'
import Character from './Character'

const Characters = () => {
  const [page, setPage] = React.useState(1)
  const fetchCharacters = async ({ queryKey }) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    )
    return response.json()
  }
  const { data, status, isPreviousData, isLoading, isError } = useQuery(
    ['characters', page],
    fetchCharacters,
    {
      keepPreviousData: true,
    }
  )

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>
  return (
    <div className="characters">
      {data.results.map((character, index) => (
        <Character character={character} key={index} />
      ))}
      <div>
        <button
          disabled={page === 1}
          onClick={() => setPage((page) => page - 1)}
        >
          Previous
        </button>
        <button
          disabled={isPreviousData || !data.info.next}
          onClick={() => setPage((page) => page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Characters
