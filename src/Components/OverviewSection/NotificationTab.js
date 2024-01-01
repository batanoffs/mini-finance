export const NotificationTab = () => {
    return (
        <div className="tab-pane fade active show" id="notification-tab-pane" role="tabpanel" aria-labelledby="notification-tab" tabindex="0">
            <h6 className="mb-4">Notification</h6>

            <form className="custom-form notification-form" action="#" method="post">

                <div className="form-check form-switch d-flex mb-3 ps-0">
                    <label className="form-check-label" for="flexSwitchCheckCheckedOne">Account activity</label>

                    <input className="form-check-input ms-auto" type="checkbox" name="form-check-input" role="switch" id="flexSwitchCheckCheckedOne" checked=""/>
                </div>

                <div className="form-check form-switch d-flex mb-3 ps-0">
                    <label className="form-check-label" for="flexSwitchCheckCheckedTwo">Payment updated</label>

                    <input className="form-check-input ms-auto" type="checkbox" name="form-check-input" role="switch" id="flexSwitchCheckCheckedTwo" checked=""/>
                </div>

                <div className="d-flex mt-4">
                    <button type="button" className="form-control me-3">
                        Reset
                    </button>

                    <button type="submit" className="form-control ms-2">
                        Update Password
                    </button>
                </div>
            </form>
        </div>
    )
}