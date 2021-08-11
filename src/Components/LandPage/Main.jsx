import React from 'react'
import './MainStyle.css'
import { Button,Col, Row } from 'react-bootstrap'
import { CssBaseline } from '@material-ui/core'
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

export default function Main() {
    return (
        <>
        <div className="main">
            <CssBaseline/>
            <div className="text" variant="h1">
            Buy Books of your need at a reasonable price.
            </div>
            <Button variant="light" to="/shop" className="CTA">Shop Now</Button>
        </div>
        <Row className="features">
            <Col lg={3} md={12} className="Fitem">
            <LocalShippingIcon style={{fontSize: '3rem'}}/>
            <h3>Fast Delivery at low shipping price.</h3>
            </Col>
            <Col lg={3} md={12} className="Fitem">
            <LoyaltyIcon style={{fontSize: '3rem'}}/>
            <h3>Find best deals!</h3>
            </Col>
            <Col lg={3} md={12} className="Fitem">
            <CreditCardIcon style={{fontSize: '3rem'}}/>
            <h3>Secured Transactions</h3>
            </Col>
            <Col lg={3} md={12} className="Fitem">
            <ChatBubbleIcon style={{fontSize: '3rem'}}/>
            <h3>24*7 Customer Service</h3>
            </Col>
        </Row>
        <div className="divider"></div>
        </>
    )
}
