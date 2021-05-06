import { useEffect, useRef } from 'react';
import CreateAccount from '../../assets/img/example/createAccount.svg';
import ExploreHome from '../../assets/img/example/exploreHome.svg';
import CheckOutAsset from '../../assets/img/example/checkout.svg';
import './cardStyle.css';

interface Props {
    inverted?: boolean;
    title: string;
    subTitle: string;
    description: string;
    svg?: 'createAccount' | 'checkout' | 'exploreHome';
}

export const CustomCard = ( { inverted = false, description, subTitle, title, svg= "checkout" }: Props ) => {

    const svgRef = useRef('checkout')

    useEffect(() => {
        if(svg === 'checkout'){
            svgRef.current = CheckOutAsset;
        } else if (svg === 'createAccount') {
            svgRef.current = CreateAccount;
        } else if (svg === 'exploreHome') {
            svgRef.current = ExploreHome;
        }
    }, [svg])
        

    if(!inverted){
        return (
            <div className="row pt-3">
                <div className="col-md-6" style={{flex: 1, alignItems: 'flex-end', display: 'flex', justifyContent: 'center'}}>
                    <img src={
                        (svg) === 'checkout' 
                        ? CheckOutAsset 
                        : (svg === 'createAccount') 
                        ? CreateAccount 
                        : (svg === 'exploreHome') 
                        ? ExploreHome: CreateAccount} 
                        className="img-fluid" 
                        alt="imagenCard"
                    />
                </div>
                <div className="col-md-6 rojo">
                    <h3 style={{color: '#FA4A0C', fontSize: 22}}> { title } </h3>
                    <h2 className="h1" style={{fontSize: 40, whiteSpace: 'pre'}}>{subTitle}</h2>
                    <p className="text-muted" style={{ fontSize: 22, whiteSpace: 'pre'}}>{ description }</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="row pt-3">
                <div className="col-md-6 rojo" style={{alignItems: 'flex-end'}}>
                    <h3 style={{color: '#FA4A0C', fontSize: 22}}> { title } </h3>
                    <h2 className="h1" style={{fontSize: 40, whiteSpace: 'pre'}}>{subTitle}</h2>
                    <p className="text-muted" style={{ fontSize: 22, whiteSpace: 'pre'}}>{ description }</p>
                </div>
                <div className="col-md-6" style={{flex: 1, alignItems: 'flex-end', display: 'flex', justifyContent: 'center'}}>
                    <img src={
                        (svg) === 'checkout' 
                        ? CheckOutAsset 
                        : (svg === 'createAccount') 
                        ? CreateAccount 
                        : (svg === 'exploreHome') 
                        ? ExploreHome: CreateAccount} 
                        className="img-fluid" 
                        alt="imagenCard"
                    />
                </div>
            </div>
        )
    }
    
}
