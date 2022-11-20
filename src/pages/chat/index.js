import React from 'react'
import styles from "./chat.module.css"

const Chat = () => {
  return (
    <section className="mt-5">
      <div className="container">
        <div className="row">
          <div className="flex d-flex justify-content-center">
            <div className="col-3 me-4">
                <div className={`${styles['chat-session']}`}>
                  <h1 className={`flex d-flex align-items-center ${styles['chat-title']}`}>Chat</h1>
                </div>
                <div className={`${styles['chat-list']}`}>
                  <div className="flex d-flex">
                    <div className="col-3 mt-1">
                    <img src={require("../../assets/Mask Group (1).png")} alt="" />
                    </div>
                    <div className="col-8">
                    <p className={`${styles["name-chat"]}`}>Jonas adam</p>
                    <p className={`${styles["chat-value"]}`}>Permisi kak, mau tanya...</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-8">
                <div className={`${styles["chat-room"]}`}>
                  <div className={`flex d-flex ${styles["chat-direction"]}`}>
                  <img className="ms-2 mt-2 mb-2" src={require("../../assets/Mask Group (1).png")} alt="" />
                  <p className={`ms-2 mt-2 ${styles["name-chat"]}`}>Jonas adam</p>
                  </div>
                  <div className={`${styles["chat-box"]}`}>
                    <div className={`${styles['sender']}`}>
                        <p>Hi</p>
                    </div>
                    <div className={`flex d-flex justify-content-end justify-items-end ${styles['receiver']}`}>
                      <p className=''>Hi</p>
                    </div>
                    <div className="flex d-flex">
                        <div className={`${styles['input-chat']}`}>
                      <input placeholder='type message...' class={`${['input-box']}`}type="text" />
                      
                    </div>
                    </div>                   
                  </div>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Chat