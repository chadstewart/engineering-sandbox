import { useState } from 'react'
import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@/components/atoms/button/button'
import { useQuery } from '@tanstack/react-query'
import { testGraphQLQuery } from '@/lib/api/graphql/internal-apis/test'

function Test() {
  const [count, setCount] = useState(0)

  const { data, isLoading, error } = useQuery({
    queryKey: ['responseData'],
    queryFn: testGraphQLQuery
  });

  return (
    <>
      <div>
        { isLoading && <p>Loading...</p> }
        { error && <p>Ohh... Well that's not good...</p> }
        { data && <p>GraphQL Data: {data.getOrders![0]!.order_id}</p> }
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="bg-red-700">Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Test
