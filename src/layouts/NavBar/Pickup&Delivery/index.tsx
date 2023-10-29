import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'

const PickupDelivery = () => {
    return (
        <DropdownButton title="Pickup & Delivery" variant="light" className="mx-1">
            <Dropdown.Item href="#/action-1">Location 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Location 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Location 3</Dropdown.Item>
        </DropdownButton>
    )
}

export default PickupDelivery
