import React from 'react'
import { Header } from 'semantic-ui-react'

function MainHeader({title, type = "h1"}) {
  // const title = props.title
  return <Header as={type}>{ title }</Header>
}

export default MainHeader