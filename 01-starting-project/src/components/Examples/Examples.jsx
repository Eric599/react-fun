import TabButton from "../TabButton";
import {EXAMPLES} from "../../data";
import {useState} from "react";
import Section from "../Section";
import Tabs from "../Tabs";


const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState()

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton)
  }

  return (
      <Section title={"Examples"} id="examples">
        {/*below we pass jsx of tab buttons as a prop so we can reuse tha Tabs and TabButton efficiently*/}
        <Tabs
          buttons={
            <>
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
            </>
          }
        >
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
        </Tabs>
      </Section>
  )
}

export default Examples