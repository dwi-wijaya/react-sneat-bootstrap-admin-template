import { useLocation } from "react-router-dom";
import { AccountWrapper } from "../../components/wrapper/AccountWrapper";
import { useEffect } from "react";

export const AccountPage = () => {
    useEffect(() => {
        const deactivateAcc = document.querySelector('#formAccountDeactivation');

        // Update/reset user image of account page
        let accountUserImage = document.getElementById('uploadedAvatar');
        const fileInput = document.querySelector('.account-file-input');
        const resetFileInput = document.querySelector('.account-image-reset');

        if (accountUserImage) {
            const resetImage = accountUserImage.src;

            fileInput.onchange = () => {
                if (fileInput.files[0]) {
                    accountUserImage.src = window.URL.createObjectURL(fileInput.files[0]);
                }
            };

            resetFileInput.onclick = () => {
                fileInput.value = '';
                accountUserImage.src = resetImage;
            };
        }
    }, []);
    return (
        <AccountWrapper title="Account" >
            <>

                <div className="card mb-4">
                    <h5 className="card-header">Profile Details</h5>
                    <div className="card-body">
                        <div className="d-flex align-items-start align-items-sm-center gap-4">
                            <img
                                src="../assets/img/avatars/1.png"
                                alt="user-avatar"
                                className="d-block rounded"
                                height="100"
                                width="100"
                                aria-label="Account image"
                                id="uploadedAvatar"
                            />
                            <div className="button-wrapper">
                                <label htmlFor="upload" className="btn btn-primary me-2 mb-4" tabIndex="0">
                                    <span className="d-none d-sm-block">Upload new photo</span>
                                    <i className="bx bx-upload d-block d-sm-none"></i>
                                    <input
                                        type="file"
                                        id="upload"
                                        className="account-file-input"
                                        hidden
                                        accept="image/png, image/jpeg"
                                    />
                                </label>
                                <button aria-label='Click me' type="button" className="btn btn-outline-secondary account-image-reset mb-4">
                                    <i className="bx bx-reset d-block d-sm-none"></i>
                                    <span className="d-none d-sm-block">Reset</span>
                                </button>
                                <p className="text-muted mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
                            </div>
                        </div>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body">
                        <form id="formAccountSettings" method="POST" onSubmit="return false">
                            <div className="row">
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value="John"
                                        autoFocus />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input className="form-control" type="text" name="lastName" id="lastName" value="Doe" />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="email" className="form-label">E-mail</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="email"
                                        name="email"
                                        value="john.doe@example.com"
                                        placeholder="john.doe@example.com" />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="organization" className="form-label">Organization</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="organization"
                                        name="organization"
                                        value="ThemeSelection" />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                                    <div className="input-group input-group-merge">
                                        <span className="input-group-text">US (+1)</span>
                                        <input
                                            type="text"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            className="form-control"
                                            placeholder="202 555 0111" />
                                    </div>
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" name="address" placeholder="Address" />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <input className="form-control" type="text" id="state" name="state" placeholder="CalihtmlFornia" />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="zipCode" className="form-label">Zip Code</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="zipCode"
                                        name="zipCode"
                                        placeholder="231465"
                                        maxLength="6" />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label className="form-label" htmlFor="country">Country</label>
                                    <select id="country" className="select2 form-select">
                                        <option value="">Select</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="Canada">Canada</option>
                                        <option value="China">China</option>
                                        <option value="France">France</option>
                                        <option value="Germany">Germany</option>
                                        <option value="India">India</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Korea">Korea, Republic of</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Philippines">Philippines</option>
                                        <option value="Russia">Russian Federation</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="United States">United States</option>
                                    </select>
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="language" className="form-label">Language</label>
                                    <select id="language" className="select2 form-select">
                                        <option value="">Select Language</option>
                                        <option value="en">English</option>
                                        <option value="fr">French</option>
                                        <option value="de">German</option>
                                        <option value="pt">Portuguese</option>
                                    </select>
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="timeZones" className="form-label">Timezone</label>
                                    <select id="timeZones" className="select2 form-select">
                                        <option value="">Select Timezone</option>
                                        <option value="-12">(GMT-12:00) International Date Line West</option>
                                        <option value="-11">(GMT-11:00) Midway Island, Samoa</option>
                                        <option value="-10">(GMT-10:00) Hawaii</option>
                                        <option value="-9">(GMT-09:00) Alaska</option>
                                        <option value="-8">(GMT-08:00) Pacific Time (US & Canada)</option>
                                        <option value="-8">(GMT-08:00) Tijuana, Baja CalihtmlFornia</option>
                                        <option value="-7">(GMT-07:00) Arizona</option>
                                        <option value="-7">(GMT-07:00) Chihuahua, La Paz, Mazatlan</option>
                                        <option value="-7">(GMT-07:00) Mountain Time (US & Canada)</option>
                                        <option value="-6">(GMT-06:00) Central America</option>
                                        <option value="-6">(GMT-06:00) Central Time (US & Canada)</option>
                                        <option value="-6">(GMT-06:00) Guadalajara, Mexico City, Monterrey</option>
                                        <option value="-6">(GMT-06:00) Saskatchewan</option>
                                        <option value="-5">(GMT-05:00) Bogota, Lima, Quito, Rio Branco</option>
                                        <option value="-5">(GMT-05:00) Eastern Time (US & Canada)</option>
                                        <option value="-5">(GMT-05:00) Indiana (East)</option>
                                        <option value="-4">(GMT-04:00) Atlantic Time (Canada)</option>
                                        <option value="-4">(GMT-04:00) Caracas, La Paz</option>
                                    </select>
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label htmlFor="currency" className="form-label">Currency</label>
                                    <select id="currency" className="select2 form-select">
                                        <option value="">Select Currency</option>
                                        <option value="usd">USD</option>
                                        <option value="euro">Euro</option>
                                        <option value="pound">Pound</option>
                                        <option value="bitcoin">Bitcoin</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-2">
                                <button aria-label='Click me' type="submit" className="btn btn-primary me-2">Save changes</button>
                                <button aria-label='Click me' type="reset" className="btn btn-outline-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card">
                    <h5 className="card-header">Delete Account</h5>
                    <div className="card-body">
                        <div className="mb-3 col-12 mb-0">
                            <div className="alert alert-warning">
                                <h6 className="alert-heading mb-1">Are you sure you want to delete your account?</h6>
                                <p className="mb-0">Once you delete your account, there is no going back. Please be certain.</p>
                            </div>
                        </div>
                        <form id="formAccountDeactivation" onSubmit="return false">
                            <div className="form-check mb-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="accountActivation"
                                    id="accountActivation" />
                                <label className="form-check-label" htmlFor="accountActivation">I confirm my account deactivation</label>
                            </div>
                            <button aria-label='Click me' type="submit" className="btn btn-danger deactivate-account">Deactivate Account</button>
                        </form>
                    </div>
                </div>
            </>
        </AccountWrapper>
    )
}