import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css';
function HeroSection()
{
    return(
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoplay loop muted></video>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for? </p>
            <Button className='btns' buttonStyle="btn-outline"
                buttonSize="btn--large">GET STARTED
            </Button>
            <Button className='btns' buttonStyle='btn-primary'
                buttonSize='btn--large' onclick={ console.log('hey') }>
                    WATCH TRAILER <i className='far fa-play-circle' />
            </Button>
        </div>
    );
}
export default HeroSection;