import React, { useState } from "react";
import { useSelector } from "react-redux";
import ModaluserName from "../ModalUserName/ModaluserName";

export default function Header() {
  const userName = useSelector((state) => state.userProfile.user.userName);
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }
  const handleSave = () => {
    closeModal()
  }
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {userName}
      </h1>
      <button className="edit-button" onClick={openModal}>Edit Name</button>
      <ModaluserName
      isOpen={isModalOpen}
      onClose={closeModal}
      title="Edit User Info"
      onSave={handleSave}
      
       />
    </div>
  );
}
