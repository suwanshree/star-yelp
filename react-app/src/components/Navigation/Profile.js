import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LogoutButton from "../auth/LogoutButton";
import { ProfileModal } from "../../context/ProfileModal";

function Profile() {
  const user = useSelector((state) => state.session.user);
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <>
      <button className="User-Profile" onClick={() => setShowModal(true)}>
        Profile
      </button>
      {showModal && (
        <ProfileModal onClose={() => setShowModal(false)}>
          <div>
            <ul className="profile-dropdown">
              <li>
                <strong>User Id:</strong> {user.id}
              </li>
              <li>
                <strong>Username:</strong> {user.username}
              </li>
              <li>
                <strong>Email:</strong> {user.email}
              </li>
              <li id="delete-button">
                <LogoutButton />
              </li>
            </ul>
          </div>
        </ProfileModal>
      )}
    </>
  );
}

export default Profile;
