import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./chat.module.css";
import Navbar from "../../component/module/navbarLogin";

const Chat = ({ socket }) => {
  const [role, setRole] = useState("");

  // messaging states
  const [user, setUser] = useState({});
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({});

  // Set role state
  useEffect(() => {
    localStorage.buyer
      ? setRole("Buyer")
      : localStorage.seller
      ? setRole("Seller")
      : setRole("");
  }, []);

  // Get current user data
  useEffect(() => {
    if (localStorage.buyer) {
      const { buyer_id: id } = JSON.parse(localStorage.getItem("buyer"));
      axios
        .get(`${process.env.BACKEND_APP_API_URL}/v1/buyer/${id}`)
        .then((res) => {
          const user = res.data.data;
          setUser(user);
        });
    } else if (localStorage.seller) {
      const { seller_id: id } = JSON.parse(localStorage.getItem("seller"));
      axios
        .get(`${process.env.BACKEND_APP_API_URL}/v1/seller/${id}`)
        .then((res) => {
          const user = res.data.data;
          setUser(user);
        });
    }
  }, []);

  // Get chat list
  useEffect(() => {
    if (localStorage.buyer) {
      axios
        .get(`${process.env.BACKEND_APP_API_URL}/v1/seller/`)
        .then((res) => {
          console.log(res);
          const data = res.data.data;
          setContacts(data);
        })
        .catch((err) => console.log(err));
    } else if (localStorage.seller) {
      axios
        .get(`${process.env.BACKEND_APP_API_URL}/v1/buyer/`)
        .then((res) => {
          console.log(res);
          const data = res.data.data;
          setContacts(data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  // Get latest chat
  useEffect(() => {
    if (socket) {
      socket.on("private-msg-BE", (message) => {
        setMessages((current) => [...current, message]);
      });
    }
  }, [socket]);

  // Get chat from db
  useEffect(() => {
    setMessages([]);
    const token = localStorage.getItem("token");
    axios
      .get(
        `${process.env.BACKEND_APP_API_URL}/v1/message/${
          role === "Buyer"
            ? contact.seller_id
            : role === "Seller"
            ? contact.buyer_id
            : ""
        }`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        const result = res.data.data;
        setMessages(result);
      });
  }, [contact, role]);

  // Select chatroom
  const selectContact = (contact) => {
    setContact(contact);
  };

  // Handle message input
  const handleInput = (e) => {
    setMessage(e.target.value);
  };

  // Sending message
  const sendMessage = () => {
    console.log(message);
    if (socket && message && (contact.buyer_id || contact.seller_id)) {
      socket.emit(
        "private-msg",
        {
          receiver: localStorage.buyer
            ? contact.seller_id
            : localStorage.seller
            ? contact.buyer_id
            : "",
          msg: message,
        },
        (message) => {
          setMessages((current) => [...current, message]);
        }
      );
      setMessage("");
    } else {
      alert("Error");
    }
  };

  // Send message trigger
  const handleSend = async (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <section className="mt-5">
      <Navbar />
      <div className={`container ${styles["main-content"]}`}>
        <div className="row">
          <div className="flex d-flex justify-content-center">
            <div className="col-3 me-4">
              <div className={`${styles["chat-session"]}`}>
                <h1
                  className={`flex d-flex align-items-center ms-2 my-2 ${styles["chat-title"]}`}
                >
                  Chat
                </h1>
              </div>
              <div className={`${styles["chat-list"]}`}>
                {contacts
                  ? contacts.map((item, index) => (
                      <div
                        onClick={() => selectContact(item)}
                        className={`flex d-flex align-items-center ${styles["chat-room"]}`}
                      >
                        <div className="col-3">
                          <img
                            src={item.avatar}
                            alt=""
                            className={styles.avatar}
                          />
                        </div>
                        <div className="col-8">
                          <p className={`${styles["name-chat"]}`}>
                            {item.name}
                          </p>
                          <p className={`${styles["chat-value"]}`}>
                            Tekan untuk melihat chat
                          </p>
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
            <div className="col-8">
              <div>
                <div className={`flex d-flex ${styles["chat-direction"]}`}>
                  <img
                    className={`ms-2 mt-2 mb-2 ${styles.avatar}`}
                    src={contact.avatar}
                    alt=""
                  />
                  <p className={`ms-2 mt-2 mb-2 ${styles["name-chat"]}`}>
                    {contact.name ? contact.name : ""}
                  </p>
                </div>
                <div className={`${styles["chat-box"]}`}>
                  <div className={styles["chat-body"]}>
                    {messages &&
                      messages.map((item, index) =>
                        (user.buyer_id || user.seller_id) === item.sender ? (
                          <p className={styles["chat-right"]}>
                            <sub>
                              {item.created_at
                                ? `${new Date(
                                    item.created_at
                                  ).getHours()}:${new Date(
                                    item.created_at
                                  ).getMinutes()}`
                                : item.date}{" "}
                            </sub>
                            {item.message}
                          </p>
                        ) : (
                          <p className={styles["chat-left"]}>
                            {item.message}
                            <sub>
                              {item.created_at
                                ? `${new Date(
                                    item.created_at
                                  ).getHours()}:${new Date(
                                    item.created_at
                                  ).getMinutes()}`
                                : `${new Date(item.date).getHours()}:${new Date(
                                    item.date
                                  ).getMinutes()}`}{" "}
                            </sub>
                          </p>
                        )
                      )}
                  </div>

                  <div className="flex d-flex">
                    <div className={`${styles["input-chat"]}`}>
                      <input
                        placeholder="type message..."
                        class={`${["input-box"]}`}
                        value={message}
                        onChange={handleInput}
                        onKeyDown={handleSend}
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
