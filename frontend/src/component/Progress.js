import React from 'react'
import '../component css/progress.css'
import data from '../data/horaire.json'

function Progress() {
    return (
        <div className='prog'>
            <h3>Volume Horaire (vh) en % :</h3>
            {data.map((e,i)=><div className='prog-box' key={i}>
                <div className='prog-info'>
                    <div >{e.name}</div>
                    <div >{`${e.nbrHeurs}%`}</div>
                </div>
                <div className='prog-bar bar1'>
                    <div className='prog-per' style={{width:`${e.nbrHeurs}%`}}></div>
                </div>
            </div>
            )}
        </div>
    )
}

export default Progress