import { isContentEditable } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import './style.scss'



function SubNav(props) {
    //(index == subNavs.length - 1 && subNavs.length != 1)
    const { subNavs } = props
    return (
        <div className="subNav" >
            <Row className="subNav" >
                {
                    subNavs.map((link, index) => (
                        <>
                            <Col className='col' id={index} key={index}>
                                <span onClick={() => props.onClick(link)}>{link.name}</span>
                            </Col>

                            {index != subNavs.length - 1 && <Col><span>/</span></Col>}

                        </>
                    ))
                }
            </Row>

        </div>
    )
}

export default SubNav