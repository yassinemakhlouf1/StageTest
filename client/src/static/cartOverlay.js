import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const handleClick = (e,h) => { if(e && e.stopPropagation) e.stopPropagation(); h.toggle()}
const Modal = ({ isShowing, hide, title, ...props }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>{console.log("hide")}
        {console.log(hide+"")}
          <div className="modal-overlay"  onClick={hide}>
            <div className="modal-wrapper" >
              <div className="modal" onClick={(e)=>{handleClick(e)}}>
                <div className="modal-header">
                  <h4>{title}</h4>
                  <button
                    type="button"
                    className="modal-close-button"
                    onClick={hide}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">{props.children}</div>
              </div>
            </div>
          </div>

          <style jsx="true">{`
            .modal-overlay {
              position: fixed;
              top: 50px;
              left: 0;
              width: 100vw;
              height: 100vh;
              z-index: 1040;
              background-color: rgba(0, 0, 0, 0.5);
              
            }

            .modal-wrapper {
              position: fixed;
              left: 550px;
              z-index: 1050;
              width: 100%;
              
              overflow-x: hidden;
              overflow-y: auto;
              outline: 0;
              display: flex;
              align-items: center;
              
            }

            .modal {
              z-index: 100;
              background: #fff;
              position: relative;
              margin: auto;
              padding: 1rem;
              overflow-y: auto;
              height:677px;
              width: 325px;
            }

            .modal-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .modal-close-button {
              font-size: 1.4rem;
              font-weight: 700;
              color: #000;
              cursor: pointer;
              border: none;
              background: transparent;
            }
          `}</style>
        </>,
        document.body
      )
    : null;

Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Modal;
