import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import video from '../videos/video-1.mp4'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={video} autoPlay loop muted />
            <h1>Hi I'm Ian</h1>
            <p>A software engineer based out of Wisconsin building programs to make life easier</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Contact Me</Button>
            </div>
        </div>
    )
}

export default HeroSection
