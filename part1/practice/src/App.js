function Hello(props) {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Dian' age="26" />
    </div>
  )
}

export default App;
