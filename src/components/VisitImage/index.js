import './index.css'
const VisitImage = props => {
  const {imageDetails, deletevisitCountries} = props
  const {id, name, imageUrl} = imageDetails
  const onClickremove = () => {
    deletevisitCountries(id)
  }
  return (
    <li className="list-item-remove">
      <img src={imageUrl} className="countrie-image" alt="thumbnail" />
      <div className="remove-container">
        <p className="text">{name}</p>
        <button
          data-testid="delete"
          type="button"
          onClick={onClickremove}
          className="remove-button"
        >
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitImage
