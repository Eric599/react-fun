import {CORE_CONCEPTS} from "../../data";
import {useMemo} from "react";
import CoreConcept from "../CoreConcept";

const CoreConcepts = () => {
  // we use the useMemo here so .map is not called every time we render
  // instead of putting the mapping code in the component, we put it here and simply call this function to display our list of components
  // React hooks always need to be declared within a component, that is why we defined it inside this app component for now
  // Only call Hooks on the top level, never inside nested code statements (e.g inside of if-statement)
  const conceptMapping = useMemo(() => {
    return CORE_CONCEPTS.map(concept => {
      return (
          <CoreConcept
              key={concept.title}
              title={concept.title}
              description={concept.description}
              image={concept.image}
          />
      )
    })
  }, [CORE_CONCEPTS])

  return (
      <section id="core-concepts">
        <h2>Core concepts</h2>
        <ul>
          {conceptMapping}
        </ul>
      </section>
  )
}


export default CoreConcepts