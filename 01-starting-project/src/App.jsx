import headerImage from './assets/react-core-concepts.png'
import componentsImage from './assets/components.png'
const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

const getRandomInt = max => {
  return Math.floor(Math.random() * (max +1))
}

const Header = () => {
  const description = reactDescriptions[getRandomInt(2)]
  return (
    <header>
      <img src={headerImage} alt="Stylized atom"/>
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

const CoreConcept = props => {
  return(
      <li>
        <img src={props.image} alt={props.title}/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
  )
}

const App = () => {
  return (
      <div>
        <Header />
        <main>
          <section id="core-concepts">
            <h2>Core concepts</h2>
            <ul>
              <CoreConcept
                title="Components"
                description="The core UI builidng block"
                image={componentsImage}
              />
              <CoreConcept
                  title="Props"
                  description="The core UI builidng block"
                  image={componentsImage}
              />
            </ul>
          </section>
          <h2>Time to get started!</h2>
        </main>
      </div>
  )
}

export default App;
