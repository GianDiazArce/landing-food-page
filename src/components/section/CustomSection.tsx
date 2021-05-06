import React from 'react'
import { Button } from 'semantic-ui-react'
import { SectionSVG } from '../svg/SectionSVG'

export const CustomSection = () => {
    return (
        <div style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <SectionSVG />
            <div style={{zIndex: 999, position: 'absolute', display: 'flex', justifyContent: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column' , justifyContent: 'center', alignItems: 'center'}}>
                    <h2 className="h2" style={{color: 'white'}}>Download the app now</h2>
                    <h4 className="h4" style={{color: 'white'}}>Available on your favorite store. Start your premium expecience now</h4>
                    <div style={{flex: 1, flexDirection: 'row', marginTop: 15}}>
                        <Button size="big" color="orange" >Playstore</Button>
                        <Button size="big" color="orange" inverted>App store</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
