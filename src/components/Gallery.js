import React from 'react'
import Part from './Part'

class Gallery extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isClicked: false,
         colors: ['blue', 'green', 'red', 'yellow']
      }
    }

    handleColors = (color) => {
        if(this.state.isClicked) {
            this.setState({isClicked: false})
            this.setState({colors: ['blue', 'green', 'red', 'yellow']})

        } else {
            this.setState({isClicked: true})
            this.setState({colors: [color, color, color, color]})
        }
    }

    render() {
        return (
            <div className='gallery'>
                <Part handleColors={this.handleColors} backgroundColor={this.state.colors[0]} />
                <Part handleColors={this.handleColors} backgroundColor={this.state.colors[1]} />
                <Part handleColors={this.handleColors} backgroundColor={this.state.colors[2]} />
                <Part handleColors={this.handleColors} backgroundColor={this.state.colors[3]} />
            </div>
        )
    }
}

export default Gallery