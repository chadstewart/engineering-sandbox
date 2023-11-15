import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Test from './components/test'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Test />
    </QueryClientProvider>
  )
}

export default App
