"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer(props) {
  function AdminFooterOrNot() {
    if (props.isAdmin) {
      return (
        <>
          <div className="open-chat">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#5061F6"
              className="bi bi-chat-text-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
            </svg>
          </div>

          <div className="chat-container">
            <div className="chat-title-bar">
              <h4>Staff Team Chat</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-x-square-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708" />
              </svg>
            </div>

            <div className="chat-log">
              <div className="chat-message">
                <div className="chat-message-inner">
                  We need to reach out to the local community for donations.
                </div>
              </div>
              <div className="chat-message">
                <div className="chat-message-inner">Bob, can you do that?</div>
              </div>
              <div className="chat-message">
                <div className="chat-message-inner">Bob, can you do that?</div>
              </div>
              <div className="chat-message">
                <div className="chat-message-inner">Bob, can you do that?</div>
              </div>
              <div className="chat-message">
                <div className="chat-message-inner">Bob, can you do that?</div>
              </div>
              <div className="chat-message">
                <div className="chat-message-inner">Bob, can you do that?</div>
              </div>
              <div className="chat-message chat-message--self">
                <div className="chat-message-inner">
                  Sure, no problem. I'll get on it right away. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Deleniti nobis
                  laboriosam distinctio sunt non quam cum repudiandae vero vel,
                  aliquid veritatis. Enim nostrum doloremque repellat ipsum
                  impedit consequuntur sapiente ipsa.
                </div>
              </div>
            </div>

            <form>
              <input
                type="text"
                autoComplete="off"
                placeholder="your message here"
              />
            </form>
          </div>

          <p className="logout-text">
            <a href="" onClick={handleClick}>
              Logout
            </a>
          </p>
        </>
      );
    } else {
      return <></>;
    }
  }

  const router = useRouter();

  async function handleClick(e) {
    e.preventDefault();
    await axios.get("/logout-action");
    router.replace("/login");
    router.refresh();
  }

  return (
    <>
      <footer className="site-footer">
        {AdminFooterOrNot()}
        <p className="footer-nav">
          <Link href="/">Home</Link>
          <Link href="/our-history">Our History</Link>
          <Link href="/our-vision">Our Vision</Link>
        </p>
        <p>&copy; 2023 Fake Adoption Center. All rights reserved.</p>
      </footer>
    </>
  );
}
