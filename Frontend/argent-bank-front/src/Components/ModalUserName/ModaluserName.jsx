import React, { useState } from "react";
import { Link } from "react-router-dom";
import argentBankLogo from "../../assets/img/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { editUserName } from "../../utils/services/userService";
import { setUserName } from "../../features/userProfileSlice";

export default function ModaluserName({ isOpen, onClose, title, onSave }) {
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.userProfile.user.firstName);
  const lastName = useSelector((state) => state.userProfile.user.lastName);
  const userName = useSelector((state) => state.userProfile.user.userName);
  const token = useSelector((state) => state.userProfile.user.token);
  const [newUserName, setNewUserName] = useState(null);
  const [error, setError] = useState(null);

  const handleUserName = (event) => {
    setNewUserName(event.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await editUserName(token, newUserName);
      dispatch(setUserName(newUserName));
      onSave();
    } catch (error) {
      setError("une erreur s'est produite");
    }
  };

  const handleResetUserName = async (e) => {
    e.preventDefault();
    setNewUserName("");
    onClose();
  };

  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <nav className="main-nav-modal">
          <div className="main-nav-logo-modal">
            <Link>
              <img
                className="main-nav-logo-image-modal"
                src={argentBankLogo}
                alt="Argent Bank Logo"
              />
            </Link>
          </div>
          <div className="main-nav-item-modal">
            <span className="close" onClick={onClose}>
              &times;
            </span>
          </div>
        </nav>
        <h2>{title}</h2>
        <form>
          <div className="container-form-input">
            <div className="form-input">
              <div>
                <label htmlFor="newUsername">Nouveau userName</label>
                <input
                  type="text"
                  id="newUsername"
                  name="newUsername"
                  placeholder="newUsername"
                  onChange={handleUserName}
                />
              </div>
              <div>
                <label htmlFor="oldUserName">Ancien userName</label>
                <input
                  type="text"
                  id="oldUserName"
                  name="oldUserName"
                  value={userName}
                  disabled
                />
              </div>
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  disabled
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  disabled
                />
              </div>
            </div>
            <div className="givemespace"></div>
          </div>
          <div className="modal-container-button">
            <button onClick={handleSubmit} className="modal-button">
              Save
            </button>
            <button onClick={handleResetUserName} className="modal-button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
