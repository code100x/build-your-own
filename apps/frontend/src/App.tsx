import { Button } from './components/ui/button';
import { useBookStore } from './store/booksStore';
const App = () => {

  const amount = useBookStore(state => state.amount)
  const updateAmount = useBookStore(state => state.updateAmount)

  return (
    <div>
      <div className='text-4xl text-green-500'>Buid your own X</div>
      <Button className='mt-5 bg-blue-500 p-4'>Click me</Button>
      <div className='mt-10'>
        <h1> Books: {amount} </h1>
        <Button
          className='mt-5 bg-slate-500 p-4'
          onClick={() => updateAmount(10)}
        > Update Amount </Button>

      </div>
    </div>
  )
}
export default App