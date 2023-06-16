import React from 'react'
import Button from '../CustomButton/CustomButton'
import ScrollAnimation from 'react-animate-on-scroll';
import './BetaQuiz.css';


const BetaQuiz = () => {
  return (
    <div className='beta-quiz-section-container'>
        <ScrollAnimation animateIn='fadeIn' duration={.6} animateOnce>

        <div className='beta-quiz-section'>

            <h1>COMING SOON</h1>
            <h1>Want to beta Bonny?</h1>
            <ol>
                <li>Take our quiz</li>
                <li>Our concierge will send you a curated list of Bonny approved products.</li>
                <li>Receive unique links for each recommended product so that you can buy them straight from the source.</li>

            </ol>
            <Button
              id='beta-button'
              label={'TAKE THE QUIZ'}
              backgroundColor={'white'}
              backgroundHover={'#f6d06d'}
              color={'black'}
              />

        </div>
        </ScrollAnimation>

    </div>
  )
}

export default BetaQuiz