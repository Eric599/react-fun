import headerImage from './assets/react-core-concepts.png'
import {CORE_CONCEPTS} from "./data";
import {useMemo} from "react";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

// we use the useMemo here so .map is not called every time we render
// instead of putting the mapping code in the component we put it here and simply call this function to display our list of components
const conceptMapping = useMemo(() => {
  return CORE_CONCEPTS.map(concept => {
    return (
        <CoreConcept
            title={concept.title}
            description={concept.description}
            image={concept.image}
        />
    )
  })
}, [])

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
              {conceptMapping}
            </ul>
          </section>
          <h2>Time to get started!</h2>
        </main>
      </div>
  )
}

export default App;
