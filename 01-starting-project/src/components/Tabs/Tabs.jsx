

const Tabs = ({children, buttons, ButtonsContainer = 'menu'}) => {
  // we take in ButtonsContainer so we can wrap our buttons in any type of component
  // It is extremely important to use variables that start with uppercase so React will know if you are using a custom component
  // we can call Tabs like below
  // <Tabs buttons={stuff} ButtonsContainer="menu">
  // OR for custom components
  // <Tabs buttons={stuff} ButtonsContainer={CustomMadeComponent}
  // we can now wrap our buttons inside any parent element we want
  // Right now it is set to default menu if user does not specify
  return (
      <>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        {children}
      </>


  )
}

export default Tabs