import React, { useRef, useState } from 'react'
import info from '../data/information.json'
import '../component css/info.css'
import image from '../image/features-2.png'

function Info() {
    const data = info;
    const linkRefs = useRef(<li></li>);
    //pour afficher une seul element
    const [acttive, setacttive] = useState(data[0].name)

    //pour faire une animation au border du nav 
    const [classActive, setclassActive] = useState(0)

    function handleLinkClick(index) {

        setclassActive(index);
        if (linkRefs.current) {
            linkRefs.current[index]?.classList.add('active');
        }
    }
    function handleLinkBlur(index) {
        if (index === classActive) return;
        linkRefs.current[index].classList.remove('active');
    }
    return (
        <div id="inforamtion" className='info'>
            <div className='info-title'>Informations sur BDAI</div >
            {/*c'est meix de les remplacer par component*/}
            <div className="inf">
                <div className="inf1">
                    <ul>
                        {data.map((e, i) => <li key={i} ref={linkRefs} className={`list ${classActive === i ? 'active' : ''}`}
                            onClick={() => { setacttive(e.name); handleLinkClick(i) }}
                            onBlur={() => handleLinkBlur(i)}>
                            {e.name}</li>)}
                    </ul>
                </div>

                <div >
                    {(data.map((e, index) => (acttive === e.name) && <div key={index}>
                        <div className="inf2">
                            <div className='inf2-txt'>
                                <div className='inf2-title'>{e.name}</div>
                                <div className='desc'>{e.descreption}</div>
                                <ul>{e.conditoin.map((e, i) => <li key={i}>{e}</li>)}</ul>
                                <div>{e.msg}</div>
                                {e.email.map((e) => <div><a>{e}</a></div>)}
                            </div>
                            <div className='inf2-img'>
                                <img src={`${e.img}`} alt=""></img>
                            </div>
                        </div>
                    </div>

                    ))}
                </div>

            </div>

        </div>
    )
}

export default Info