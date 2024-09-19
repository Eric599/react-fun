import {CORE_CONCEPTS} from "./data";
import {useMemo} from "react";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

const App = () => {
  // we use the useMemo here so .map is not called every time we render
  // instead of putting the mapping code in the component we put it here and simply call this function to display our list of components
  // always needs to be declared within a component, that is why we defined it inside this app component for now
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
  }, [CORE_CONCEPTS])

  const handleSelect = () => {
    console.log("onSelect");
  }
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
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton onSelect={handleSelect}>Components</TabButton>
              <TabButton onSelect={handleSelect}>JSX</TabButton>
              <TabButton onSelect={handleSelect}>Props</TabButton>
              <TabButton onSelect={handleSelect}>State</TabButton>

            </menu>
          </section>
          <h2>Time to get started!</h2>
        </main>
      </div>
  )
}

export default App;
