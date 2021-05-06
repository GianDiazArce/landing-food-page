import React from 'react'
import { Button } from 'semantic-ui-react';
import HeaderBackground from '../../assets/img/headerBackground.svg';
import Phones from '../../assets/img/phones.svg';
import './bodyHeaderStyle.css';

export const BodyHeader = () => {
    return (
        <div style={{ height: '1000px' }}>
            {/* <img className="img-fluid imgContainer" style={{display: 'none'}} src={ HeaderBackground } alt="HeaderBackground"/>
            <Button className="rounded-pill itemImage" color="orange" size="big">
                Playstore
            </Button>
            <Button className="rounded-pill itemImage" inverted color="orange" size="big">
                App Store
            </Button> */}
            <div className="imgContainer" style={{backgroundImage: `url(${HeaderBackground})`, flexDirection:'column'}}>
                <div style={{textAlign: 'center', marginTop: 60}}>
                    <h3 style={{color: 'white'}}>Food app</h3>
                    <h2 style={{color: 'white', fontSize: 58}}>Why stay hungry when <br/> you can order form bella onojie</h2>
                    <p style={{color: 'white', fontSize: 24, marginTop: 9}}>Download the bella onoje's food app now on</p>
                </div>
                <div style={{marginTop: 50, paddingBottom: 20, zIndex: 999}}>
                    <Button className="rounded-pill mr-4" color="orange" size="massive">
                        Playstore
                    </Button>
                    <Button className="rounded-pill" onClick={() => { console.log('Hola') }} inverted color="orange" size="massive">
                        App Store
                    </Button>
                </div>
                <div style={{marginTop: -90, zIndex: 9, position: 'relative', width: 548, height: 640}}>
                    {/* <img style={{position: 'absolute', left: '-15%'}} src={Phones} alt=""/> */}
                    <img style={{ margin: '0 auto' }} className="img-fluid" src={Phones} alt=""/>
                </div>
            </div>
        </div>
    )
}
