// /src/components/Footer/index.js

import "./Footer.css";

const Footer = () => {
    return (
        <footer className={"footer"}>
            <section>
                <ul>
                    <li>
                        <a href="https://github.com/raul-franca/react-organo" target="_blank" rel="noreferrer">
                            <img src="/imagens/gh.png" alt="GitHub" />
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/raulmfranca/" target="_blank" rel="noreferrer">
                            <img src="/imagens/in.png" alt="Linkedin" />
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