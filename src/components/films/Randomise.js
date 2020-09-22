import React from 'react'

// import FilmShow from './common/FilmsShow'
import { getRandomFilm } from '../../lib/api'
import { Redirect } from 'react-router-dom'

class Randomise extends React.Component {
  state = {
    id: null
    // film: null
  }

  generateRandomNumber = () => {
    const random = Math.floor(Math.random() * 1000)
    this.setState({
      id: random
    })
  }

  async componentDidMount() {
    this.generateRandomNumber()
    const randomFilmId = this.state.id
    // const filmaData = this.state.film
    if (typeof this.state.id === 'number') {
      const response = await getRandomFilm(randomFilmId)
      this.setState({
        id: response.data,
        film: response
      })
    }
  }

  render() {
    // console.log(this.state.film)
    if (typeof this.state.id === 'number') {
      return (
        <Redirect to={`/films/${this.state.id}`}/>
      ) 
    } else return <div>Loading...</div>
  }
}


export default Randomise
