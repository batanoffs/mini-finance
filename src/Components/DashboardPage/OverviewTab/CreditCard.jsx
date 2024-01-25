export const CreditCard = ({creditCard, name, balance}) => {
    let card = creditCard.cardNumber;
    // TO DO last digits
    const splitDigits = (number) => {
        if (number) {
            return number.toString().split('').splice(-4).join('');
        }
        return "****"
    }

    return (
        <div className="custom-block custom-block-balance">
            <h5>Твоята наличност</h5>

            <h4 className="mt-2 mb-3">${balance}</h4>

            <div className="custom-block-numbers d-flex align-items-center">
                <span>****</span>
                <span>****</span>
                <span>****</span>
                <small>{splitDigits(card)}</small>
            </div>

            <div className="d-flex" style ={{ display: "flex", justifyContent: "space-between"}}>
                <div>
                    <h6>Валидна до</h6>
                    <small>{creditCard.expiryDate}</small>
                </div>

                <div className="ms-auto">
                    <h6>Картодържател</h6>
                    <small>{name}</small>
                </div>
            </div>
        </div>
    )
}