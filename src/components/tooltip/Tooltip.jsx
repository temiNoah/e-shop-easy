import React, { useState } from 'react'
import { Tooltip } from 'reactstrap'


function CustomTooltip({ text, targetElementId, position }) {

    const [tooltipOpen, setTooltipOpen] = useState(false)

    return (
        <Tooltip placement={position} isOpen={tooltipOpen} target={targetElementId} toggle={() => { setTooltipOpen((prev) => (!prev)) }}>
            {text}
        </Tooltip>
    )
}

export default CustomTooltip