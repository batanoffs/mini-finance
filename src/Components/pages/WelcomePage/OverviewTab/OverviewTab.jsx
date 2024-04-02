import { useContext,useState } from "react";

import { ProfileDetails } from "./assets/profileDetails/ProfileDetails";
import { Greetings } from "./assets/Greetings";

import { BankingActionButtons } from "../assets/BankingActionsButtons/BankingActionButtons";
import { AuthContext } from "../../../../contexts/AuthContext";
import { QuickSendMoney } from "../assets/Quicksend/QuickSend";
import { LastTransactions } from "../assets/LastTransactions";
import { ExchangeRate } from "../assets/ExchangeRate";
import { VirtualCard } from "../assets/VirtualCard";
import { ContactInfo } from "../assets/ContactInfo";
import { AddFriends } from "../assets/AddFriends";
import { History } from "../assets/History";

import styles from "../welcome-page-layout.module.css";

export const OverviewTab = (props) => {
    const [userInput, setUserInput] = useState({ amount: "", friends: "" });
    const { name, virtualcard, balance, picture, phone, email } = useContext(AuthContext);
    
    return (
        <div className={styles.contentContainer}>
            <div className={styles.bentoMainColumn}>
                <Greetings name={name} />
                <ProfileDetails
                    picture={picture}
                    name={name}
                    phone={phone}
                    email={email}
                />

                <VirtualCard
                    virtualcard={virtualcard}
                    name={name}
                    balance={balance}
                />

                <ExchangeRate props={props}/>
            </div>
            <div className={styles.bentoFillColumn}>
                <LastTransactions />
                <History />
            </div>

            <div className={styles.bentoSideColumn}>
                <ContactInfo />
                <AddFriends />
                <BankingActionButtons userInput={userInput} setUserInput={setUserInput} showModal={props.showModal} setShowModal={props.setShowModal}/>
                <QuickSendMoney userInput={userInput} setUserInput={setUserInput} showModal={props.showModal} setShowModal={props.setShowModal}/>
            </div>
        </div>
    );
};
