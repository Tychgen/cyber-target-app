import React from 'react'
import {Dropdown, DropdownButton} from 'react-bootstrap'
const WhatsNew = () => {
  return (
    <DropdownButton title="What’s New" variant="light" className="mx-1">
    <Dropdown.Item href="#/action-1">New 1</Dropdown.Item>
    <Dropdown.Item href="#/action-2">New 2</Dropdown.Item>
    <Dropdown.Item href="#/action-3">New 3</Dropdown.Item>
</DropdownButton>
  )
}

export default WhatsNew
