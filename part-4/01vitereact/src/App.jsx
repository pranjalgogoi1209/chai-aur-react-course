import Chai from "./Chai"

function App() {
  const name = "Pranjal Gogoi"

  const marks = 45;

  return (
    <>
      <h1>chai aur react with vite + react app | {name}</h1>
      {/* evaluated javascript expression, evaluated means final result */}
      <div>
        {
          marks>=30 ? <h1>PASS</h1> : <h1>FAIL</h1>
        }
      </div>
      <Chai/>
    </>
  )
}

export default App
