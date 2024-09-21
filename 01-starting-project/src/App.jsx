import {CORE_CONCEPTS, EXAMPLES} from "./data";
import {useMemo, useState} from "react";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

const App = () => {
  // we use the useMemo here so .map is not called every time we render
  // instead of putting the mapping code in the component, we put it here and simply call this function to display our list of components
  // React hooks always need to be declared within a component, that is why we defined it inside this app component for now
  // Only call Hooks on the top level, never inside nested code statements (e.g inside of if-statement)
  const conceptMapping = useMemo(() => {
    return CORE_CONCEPTS.map(concept => {
      return (
          <CoreConcept
              key = {concept.title}
              title={concept.title}
              description={concept.description}
              image={concept.image}
          />
      )
    })
  }, [CORE_CONCEPTS])

  // useState always returns array of 2 elements, second element is always a function
  // setting to Components as default
  const [selectedTopic, setSelectedTopic] = useState()

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton)
  }

  return (
      <>
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
              {/*// passing a function like below comment does not need the () or else it will execute on mount*/
                /*<TabButton onSelect={handleSelect}>Components</TabButton>*/}
              {/*Here below we are now passing a function so we can include parameters. This will not get executed on mount*/}
              <TabButton
                  isSelected={selectedTopic === 'components'}
                  onSelect={() => handleSelect('components')}
              >
                Components
              </TabButton>
              <TabButton
                  isSelected={selectedTopic === 'jsx'}
                  onSelect={() => handleSelect('jsx')}
              >
                JSX
              </TabButton>
              <TabButton
                  isSelected={selectedTopic === 'props'}
                  onSelect={() => handleSelect('props')}
              >
                Props
              </TabButton>
              <TabButton
                  isSelected={selectedTopic === 'state'}
                  onSelect={() => handleSelect('state')}
              >
                State
              </TabButton>
            </menu>

            {selectedTopic ?
                <div id={"tab-content"}>
                  <h3>{EXAMPLES[selectedTopic].title}</h3>
                  <p>{EXAMPLES[selectedTopic].description}</p>
                  <pre>
                      <code>
                        {EXAMPLES[selectedTopic].code}
                      </code>
                     </pre>
                </div> :
                <h2>Please select a topic!</h2>
            }

          </section>

        </main>
      </>
  )
}

export default App;
