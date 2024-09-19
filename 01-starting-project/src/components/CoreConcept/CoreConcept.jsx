// dereferencing props instead, provides cleaner code in body, ensures props doesn't get polluted
const CoreConcept = ({image, title, description}) => {
  return(
      <li>
        <img src={image} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
  )
}

// mimicking the function above but accessing the elements via props
const CoreConceptProps = props => {
  return(
      <li>
        <img src={props.image} alt={props.title}/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
  )
}

export default CoreConcept