import { Link } from "react-router-dom";
import style from "./about.module.css";

export const About = () => {
    return (
        <section className={style.about}>
            <div className={style.container}>
                <div className={style.aboutContent}>
                    <h2>За приложението</h2>
                    <p>
                        Добре дошли във Mini Finance Innovations, вашето основно
                        решение за управление на финансите с лекота. Без
                        значение дали става въпрос за зареждане на вашата
                        виртуална карта, добавяне на приятели, извършване на
                        транзакции или проследяване на вашата финансова история,
                        ние сме тук, за да ви помогнем.
                    </p>
                    <div className={style.features}>
                        <div className={style.feature}>
                            <img
                                src="https://notablepen.backendless.app/api/files/app/AppData/home/credit-card.png"
                                alt="Virtual Card"
                                className={style.featureImg}
                            />
                            <h5>Зареждане на Виртуална Карта</h5>
                            <p>
                                Лесно зареждайте вашата виртуална карта и
                                използвайте я за онлайн и офлайн покупки.
                            </p>
                        </div>
                        <div className={style.feature}>
                            <img
                                src="https://notablepen.backendless.app/api/files/app/AppData/home/new-friendship.png"
                                alt="Add Friends"
                                className={style.featureImg}
                            />
                            <h5>Добавяне на Приятели</h5>
                            <p>
                                Свържете се с приятели и семейство, за да
                                споделяте сметки и да изпращате пари моментално.
                            </p>
                        </div>
                        <div className={style.feature}>
                            <img
                                src="https://notablepen.backendless.app/api/files/app/AppData/home/transaction.png"
                                alt="Make Transactions"
                                className={style.featureImg}
                            />
                            <h5>Извършване на Транзакции</h5>
                            <p>
                                Сигурно изпращайте и получавайте пари, плащайте
                                сметки и управлявайте финансите си безпроблемно.
                            </p>
                        </div>
                        <div className={style.feature}>
                            <img
                                src="https://notablepen.backendless.app/api/files/app/AppData/home/writing.png"
                                alt="Track History"
                                className={style.featureImg}
                            />
                            <h5>Проследяване на История</h5>
                            <p>
                                Поддържайте запис за своите финансови навици и
                                финансова история за по-добро управление на
                                парите си.
                            </p>
                        </div>
                    </div>
                    <p>
                        Нашата платформа е създадена, за да предостави
                        безпроблемно и сигурно изживяване, позволяващо ви да
                        управлявате вашите финанси с увереност и удобство.
                    </p>
                    <p>
                        В Mini Finance Inovations разбираме важността на
                        финансовото благополучие. Затова нашият екип е посветен
                        на предоставянето на иновативни решения, персонализирани
                        според вашите нужди, за да ви помогне да постигнете
                        вашите финансови цели.
                    </p>
                    <Link
                        to="/"
                        style={{ fontFamily: "Montserrat", color: "white", margin: "2em auto" }}
                        className="button-primary"
                    >
                        Към начална страница
                    </Link>
                </div>
                
            </div>
            
        </section>
    );
};
