import { FaYoutube, FaWhatsapp } from "react-icons/fa";
import { IconContext } from "react-icons";


function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__section">
                    <IconContext.Provider value={{ className: "footer__icon" }}>
                        <a href="https://youtube.com/@THWSSBNGMS" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </a>
                    </IconContext.Provider>
                </div>
                <div className="footer__section">
                    <IconContext.Provider value={{ className: "footer__icon" }}>
                        <a href="https://chat.whatsapp.com/DQMV3M38L2TCsEn5JMpkm5" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp />
                        </a>
                    </IconContext.Provider>
                </div>
            </div>
        </footer>
    );
}
export default Footer