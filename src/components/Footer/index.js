// /src/components/Footer/index.js

import "./Footer.css";

const Footer = () => {
    return (
        <footer className={"footer"}>
            <section>
                <ul>
                    <li>
                        <a href="#" target="_blank">
                            <img src="/imagens/fb.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <img src="/imagens/tw.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <img src="/imagens/ig.png" alt="" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="" />
            </section>
            <section>
                <p>
                    Desenvolvido por Raul França.
                </p>
            </section>
        </footer>
    )
}

export default Footer;