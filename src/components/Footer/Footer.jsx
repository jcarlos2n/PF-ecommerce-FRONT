
import React from "react";
import './Footer.scss'

const Footer = props => {

    return (
        <div className="footer">
            <div className="footerTop">
                <div className="footerIcons">
                    <img className="logo" src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" />
                    <a href="https://geekshubsacademy.com/"><img className="logo" src="https://avatars.githubusercontent.com/u/36510045?s=280&v=4" alt="" /></a>
                    <img className="logo" src="https://cdn.icon-icons.com/icons2/2037/PNG/512/facebook_fb_media_social_icon_124262.png" alt="" />
                </div>
            </div>
            <div className="footerMiddle">
                <div className="footLeft">
                    <a className="linkFoot">Instalaciones</a>
                    <a className="linkFoot">Contacto</a>
                    <a className="linkFoot">Preguntas frecuentes</a>
                    <a className="linkFoot">Noticias</a>
                </div>
                <div className="footRight">
                    <a className="linkFoot">Privacidad</a>
                    <a className="linkFoot">Aviso legal</a>
                    <a className="linkFoot">Política de cookies</a>
                    <a className="linkFoot">Opiniones de clientes</a>
                </div>
            </div>
            <div className="footerBottom"></div>
        </div>
    )

}

export default Footer;