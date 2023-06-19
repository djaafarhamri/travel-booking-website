import React from 'react'
import ServiceCard from './ServiceCard'

import { Col } from 'reactstrap'

import weatherImg from '../assets/images/guide.png'
import guideImg from '../assets/images/weather.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: 'Calculate Weather',
        desc: 'lorem ipsum sit amet lorem ipsum sit amet lorem '
    },
    {
        imgUrl: guideImg,
        title: 'Best Tour Guide',
        desc: 'lorem ipsum sit amet lorem ipsum sit amet lorem '
    },
    {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: 'lorem ipsum sit amet lorem ipsum sit amet lorem '
    },
]

const ServiceList = () => {
  return (
    <>
    {
        servicesData.map((service, index) => (
            <Col lg="3" key={index}>
                <ServiceCard service={service} />
            </Col>
        ))
    }
    </>
  )
}

export default ServiceList