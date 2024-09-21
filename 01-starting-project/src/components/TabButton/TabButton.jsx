
const TabButton = (props) => {
  return (
      <li>
        <button className={props.isSelected ? 'active' : undefined} onClick={props.onSelect}>{props.children}</button>
      </li>
  )
}


export default TabButton;


//  again we can also dereference in the params
const TabButtonV2 = ({children, onSelect}) => {
  return <li><button>{children}</button></li>
}

/**
 *
 * props.children is always available and populated. It refers to the elements within your component tags
 * EX:
 * <TabButton>
 *   <H1>Everything here are children<H1 />
 * <TabButton />
 *
 * You could have also just passed the value via props instead of using children, it's personal preference
 *
 */