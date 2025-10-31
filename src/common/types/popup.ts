import type { ConfirmPopupProps } from "../components/confirm-popup/ConfirmPopup";
import type { LoadingPopupProps } from "../components/loading-popup/LoadingPopup";
import type { MessagePopupProps } from "../components/message-popup/MessagePopup";

export type PopupConfig =
  | { type: "confirm"; props: ConfirmPopupProps }
  | { type: "loading"; props: LoadingPopupProps }
  | { type: "message"; props: MessagePopupProps };

export interface PopupContextType {
  openPopup: (popup: PopupConfig) => void;
  closePopup: () => void;
}
