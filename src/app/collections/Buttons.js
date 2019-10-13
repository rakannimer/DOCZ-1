import React  from 'react'


import { Button } from '@src/babel-components/Button'

const buttonSectionStyle = {
  display: 'flex',
  justifyContent: 'space-evenly'
}

const Buttons = () => {
  return (
    <div>
      <h4>Primary</h4>
      <div style={buttonSectionStyle}>
        <Button>
          <span>click</span>
        </Button>
      </div>
    </div>
  )
}

export default Buttons
