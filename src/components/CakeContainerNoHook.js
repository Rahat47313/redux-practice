import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainerNoHook(props) {
  return (
    <div>
      <h2>Number of Cakes - {props.numOfCakes} (no hook)</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainerNoHook)
