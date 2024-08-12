import React from 'react'
import { Spinner } from 'reactstrap'

function CustomSpinner(props) {
    return (
        <Spinner style={{ width: '2rem', height: '2rem' }}
            children={false} />
    )
}

export default CustomSpinner