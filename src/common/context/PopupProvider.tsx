import React, { useState, type ReactNode } from "react";
import { ConfirmPopup, LoadingPopup, MessagePopup } from "../components";
import { PopupContext } from "./PopupContext";
import type { PopupConfig } from "../types/popup";

export const PopupProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [popup, setPopup] = useState<PopupConfig | null>(null);
  const [open, setOpen] = useState(false);

  const openPopup = (config: PopupConfig) => {
    setPopup(config);
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
    setTimeout(() => setPopup(null), 200); // Unmount after animation
  };

  const renderPopup = () => {
    if (!popup) return null;
    switch (popup.type) {
      case "confirm":
        return (
          <ConfirmPopup
            {...popup.props}
            open={open}
            onCancel={(e) => {
              popup.props.onCancel?.(e);
              closePopup();
            }}
            onConfirm={(e) => {
              popup.props.onConfirm?.(e);
              closePopup();
            }}
          />
        );
      case "loading":
        return (
          <LoadingPopup
            {...popup.props}
            open={open}
            onCancel={(e) => {
              popup.props.onCancel?.(e);
              closePopup();
            }}
            onButtonClick={(e) => {
              popup.props.onButtonClick?.(e);
              closePopup();
            }}
          />
        );
      case "message":
        return (
          <MessagePopup
            {...popup.props}
            open={open}
            onCancel={(e) => {
              popup.props.onCancel?.(e);
              closePopup();
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <PopupContext.Provider value={{ openPopup, closePopup }}>
      {children}
      {renderPopup()}
    </PopupContext.Provider>
  );
};
