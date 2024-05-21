import './index.css'
const VisitCountries = props => {
  const {countriesDetails, addVisitedCountry} = props
  const {id, name, isVisited} = countriesDetails
  const ButtonText = isVisited ? 'Visited' : 'Visit'
  const onClickVisit = () => {
    addVisitedCountry(id)
  }
  return (
    <li className="list">
      <div className="list-item">
        <p className="name">{name}</p>
        {isVisited === true ? (
          <p className="text">{ButtonText}</p>
        ) : (
          <button type="button" onClick={onClickVisit} className="button">
            {ButtonText}
          </button>
        )}
      </div>
      <hr className="hr-line" />
    </li>
  )
}
export default VisitCountries
