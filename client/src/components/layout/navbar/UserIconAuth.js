import React, { useState, useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import UserTooltipAuth from "../user/UserTooltipAuth";


const UserIconAuth = () => {
  let domNode = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  }; 

  // to handle click outside tooltip to close it.
  useEffect(() => {
    let myHandler = (event) => {
      if(domNode.current && !domNode.current.contains(event.target)) {
        setIsOpen(false); 
      }
    };
    document.addEventListener('mousedown', myHandler);

    return () => {
      document.removeEventListener('mousedown', myHandler);
    }
  }, []);


  return (
    <li>
      <div
        className="avatar"
        style={{
          position: "relative",
          cursor: "pointer",
        }}
        onClick={handleMenuDropdown}
      >
        <span>
          <FaUserCircle />
        </span>
        <span
          className="avatar-user-name"
          style={{
            fontSize: "0.7rem",
            position: "absolute",
            top: "100%",
            color: '#fff',
          }}
        ></span>

        {isOpen && <UserTooltipAuth forwardedRef={domNode} />}
      </div>
    </li>
  );
};

export default UserIconAuth;
