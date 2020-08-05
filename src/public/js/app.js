class App extends React.Component {
    render () {
      return (
        <div>
          <h1> Home Page </h1>
          <form>
            <label htmlFor='description'>description</label>
            <input type='text' value='' id='description' />
            <input type='submit' />
          </form>
          <h2></h2>
        </div>
      )
    }
}

class 
  
  ReactDOM.render(
    <App />,
    document.querySelector('.container')
  )