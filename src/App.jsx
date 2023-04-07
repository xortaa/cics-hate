import "./App.css"

function App() {

  function generateRandomNumber() { 
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    return randomNumber
  }

  return (
    <div className='App'>
      <img src="/sticker.png" alt="I HATE CICS >:(" className="image" onClick={() => {
        console.log("I HATE CICS >:(( \n")
        console.log("\n")
      }}/>
      <div className='marquee'>
        <ul className={`marquee__content${generateRandomNumber()}`}>
          <li>{`I HATE CICS >:(`}</li>
          <li>{`I HATE CICS >:(`}</li>
          <li>{`I HATE CICS >:(`}</li>
          <li>{`I HATE CICS >:(`}</li>
          <li>{`I HATE CICS >:(`}</li>
        </ul>
      </div>
      <div className='marquee'>
        <ul className={`marquee__content${generateRandomNumber()}`}>
          <li>{`I HATE CICS >:(`}</li>
          <li>{`I HATE CICS >:(`}</li>
          <li>{`I HATE CICS >:(`}</li>
          <li>{`I HATE CICS >:(`}</li>
          <li>{`I HATE CICS >:(`}</li>
        </ul>
      </div>
      <div className='marquee'>
        <ul className={`marquee__content${generateRandomNumber()}`}>
          <li>{`I HATE CICS >:(`}</li>
          <li>{`I HATE CICS >:(`}</li>
          <li>{`I HATE CICS >:(`}</li>
          <li>{`I HATE CICS >:(`}</li>
          <li>{`I HATE CICS >:(`}</li>
        </ul>
      </div>
      <div className='marquee'>
        <ul className={`marquee__content${generateRandomNumber()}`}>
          <li>{`I HATE CICS >:(`}</li>
          <li>{`I HATE CICS >:(`}</li>
          <li>{`I HATE CICS >:(`}</li>
          <li>{`I HATE CICS >:(`}</li>
          <li>{`I HATE CICS >:(`}</li>
        </ul>
      </div>
      <div className='marquee'>
      <ul className={`marquee__content${generateRandomNumber()}`}>
          <li>{`I HATE CICS >:(`}</li>
          <li>{`I HATE CICS >:(`}</li>
          <li>{`I HATE CICS >:(`}</li>
          <li>{`I HATE CICS >:(`}</li>
          <li>{`I HATE CICS >:(`}</li>
        </ul>
      </div>
    </div>
  )
}

export default App
