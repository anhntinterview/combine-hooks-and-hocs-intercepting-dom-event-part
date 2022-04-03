/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from "react";
import { css } from "@emotion/react";
import { ButtonWithLoggingOnClickWithProps } from "./buttons";
import { withSupressKeyPress } from "../hocs/with-supress-key-press";

const modalCss = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const blankenCss = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
`;

const modalBody = css`
  width: 30%;
  position: fixed;
  top: 30px;
  left: -15%;
  padding: 40px;
  margin-left: 50%;
  background: #fff;
  border-radius: 12px;
  z-index: 3;
  box-sizing: border-box;
`;

const footerCss = css`
  margin: 30px 0 0 0;
`;

type ModalProps = {
  onClose: () => void;
};

export const Modal = ({ onClose }: ModalProps) => {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);

  return (
    <div css={modalCss} tabIndex={1} ref={ref}>
      <div css={blankenCss} onClick={onClose} />
      <div css={modalBody}>
        content
        <div css={footerCss}>
          <ButtonWithLoggingOnClickWithProps
            onClick={onClose}
            logText="button in modal"
          >
            Close
          </ButtonWithLoggingOnClickWithProps>
        </div>
      </div>
    </div>
  );
};

export const ModalWithSupressKeyPress = withSupressKeyPress(Modal);
