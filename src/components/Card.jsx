import React from 'react'
import './Card.css'
import cat from '../images/Photo.png'

export default function Card(props) {
    const [link, setLink] = React.useState(<a href='#'>купи.</a>)
    let mottoTextArray = ['Чего сидишь? Порадуй котэ, ', `${props.promoText}`, `Печалька, ${props.subtitle} закончился.`]
    const [mottoText, setMottoText] = React.useState(mottoTextArray[0])
    const [selected, setSelected] = React.useState(true);
    const handleClick = event => {
        setSelected(current => !current)
        if (selected) {
            event.currentTarget.classList.add('selected')
            setLink('')
            setMottoText(mottoTextArray[1])
        } else {
            event.currentTarget.classList.remove('selected')
            setLink(<a href='#'>купи.</a>)
            setMottoText(mottoTextArray[0])
        }  
    }

    return (
        <div className='card' onClick={handleClick}>
            <div className='main-part-border'>
                <div className='main-part'>
                    <div className='text-part'>
                        <p className='promo-label'>{props.promoLabel}</p>
                        <h1 className='title'>{props.title}</h1>
                        <h2 className='subtitle'>{props.subtitle}</h2>
                        <p className='volume'>{props.volume} порций</p>
                        <p className='gift'>{props.gift}</p>
                        <p className='additional-info'>{props.additionalInfo}</p>
                    </div>
                    <img className='cat-pic' src={cat} alt='cat'/>
                    <div className='weight-info'>
                        <p className='weight'>{props.weight}</p>
                        <p className='measure'>кг</p>
                    </div>
                </div>
            </div>
            <p className='motto-text'>{mottoText}{link}</p>
        </div>
    )
}