import { Icon } from 'semantic-ui-react';
import LogoSVG from '../../assets/img/logoMenu.svg';

export const Footer = () => {
    return (
        <div className="row " style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className="col-md-4 text-center">
                <img src={LogoSVG} alt=""/>
            </div>
            <div className="col-md-4 text-center">
                <a href="https://twitter.com" rel="noopener noreferrer" className="mx-3 " target="_blank"><Icon link name="twitter" color="orange" size="huge" /></a>
                <a href="https://facebook.com" rel="noopener noreferrer" className="mx-3 " target="_blank"><Icon link name="facebook" color="orange" size="huge" /></a>
                <a href="https://instagram.com" rel="noopener noreferrer" className="mx-3 " target="_blank"><Icon link name="instagram" color="orange" size="huge" /></a>    
            </div>
            <div className="col-md-4 text-center">
                <p>Copyright &copy;</p>
            </div>
        </div>
    )
}
