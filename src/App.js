import React from 'react'

const Title = (props) => {

  const styles = {
    padding: '0,3em',
    color: '#fff',
    background: props.uiColor,
    borderRadius: '0.3em',
    textAlign: 'center',
    fontSize: '50px'
  }
  return (
    <h1 style= {styles} >  
    {props.children }
    </h1>
  )
}


class App extends React.Component {
  state = {
    uiColor: 'black'
  }
  render () {
    return (
      <div>
        <Title 
        uiColor= {this.state.uiColor}
        >
            Andres <em>Sierra</em>
        </Title>
      </div>
    )
  }
}
export default App