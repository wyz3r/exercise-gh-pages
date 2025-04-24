
import PropTypes from 'prop-types'

export function GridItem({title, url}) {
    
  return (
    <div data-testid="card" className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}


GridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}