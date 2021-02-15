import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import Nevblastimage from '../images/nevblastlogo.png'
import Puttputtimage from '../images/agsimage.jpg'
import Discgolfimage from '../images/discgolfimage.jpg'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out some my projects!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <CardItem 
                        src={ Discgolfimage }
                        text="During Freshman year of college, for the disc golf club I was a part of, I create as simple way to keep track of attendence points for the group using google sheets"
                        label='C#'
                        path="https://github.com/IanSiebold/DiscGolfClubPoints"
                        />
                        <CardItem 
                        src={ Nevblastimage }
                        text="During my Junior year of college I worked with a 2 other Software Engineering students to improve a tool for biology researchers in Steven's Point"
                        label='Java'
                        path="https://github.com/IanSiebold/NevBlast"
                        />
                        <CardItem 
                        src={ Puttputtimage }
                        text="I teamed up with 3 other students in one of my UX classes to put together a children's game similar to the Putt Putt series"
                        label='AGS Script'
                        path="https://github.com/IanSiebold/Putt-Putt_Game"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards