import { useContext } from "react";
import { UserDataContext } from "../../../contexts/UserDataContext";
import { Link } from "react-router-dom";

import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { Contact } from "../SettingsTab/NavigationTabs/CallUs";

export const ProfileTab = () => {
    const { adress, country, name, phone, creditCard, picture, email } =
        useContext(UserDataContext);
    const date = new Date(creditCard.created);
    const month = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDate();
    const createdDate = `${month} ${day}, ${year}`;

    return (
        <div className="content-container">
            <div className="bento-fill-column" style={{ marginLeft: "1em" }}>
                <div className="custom-block custom-block-profile">
                    <div className="row">
                        <div>
                            <h5>Обща информация</h5>
                        </div>

                        <div>
                            <div className="custom-block-profile-image-wrap">
                                <img
                                    src={picture}
                                    className="custom-block-profile-image img-fluid"
                                    alt=""
                                />

                                <Link
                                    to="/dashboard/settings"
                                    className="bi-pencil-square custom-block-edit-icon"
                                ></Link>
                            </div>
                        </div>

                        <div>
                            <p>
                                <strong>Име:</strong>

                                <span>{name}</span>
                            </p>

                            <p>
                                <strong>Email:</strong>

                                <span>{email}</span>
                            </p>

                            <p>
                                <strong>Телефон:</strong>

                                <span>{phone}</span>
                            </p>

                            <p>
                                <strong>Държава:</strong>

                                <span>{country}</span>
                            </p>

                            <p>
                                <strong>Адрес:</strong>

                                <span>{adress}</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="custom-block custom-block-profile">
                    <h5>Дебитна карта</h5>
                    <div>
                        <Cards
                            number={creditCard.cardNumber}
                            expiry={creditCard.expiryDate}
                            cvc={creditCard.cvv}
                            name={name}
                        />
                    </div>
                    <div>
                        <p>
                            <strong>Номер:</strong>

                            <span>{creditCard.cardId}</span>
                        </p>

                        <p>
                            <strong>Вид:</strong>

                            <span>{creditCard.brand}</span>
                        </p>

                        <p>
                            <strong>Създадена на:</strong>

                            <span>{createdDate}</span>
                        </p>

                        <p>
                            <strong>Валидна до:</strong>

                            <span>{creditCard.expiryDate}</span>
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="bento-side-column">
                <Contact />
            </div>
        </div>
    );
};
