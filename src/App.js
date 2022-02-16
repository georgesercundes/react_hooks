import React, { useState } from "react";

export default function App() {
  const [repositories, setRepositories] = useState([
    { id: 1, name: 'repo-1' },
    { id: 2, name: 'repo-2' },
    { id: 3, name: 'repo-3' }
  ])

  function handleRepository() {
    setRepositories([...repositories, { id: Math.random(), name: 'novoRepo' }])
  }

  return (
    <>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <button onClick={handleRepository}>Adicionar Repositório</button>
    </>
  )
}

