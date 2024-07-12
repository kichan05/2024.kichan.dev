import React, {useContext, useReducer} from "react";
import { v4 } from "uuid";

export const UI_ACTION_TYPE = {
  modal_show: "MODAL_SHOW",
  modal_hide: "MODAL_HIDE",
  modal_toggle: "MODAL_TOGGLE",

  alert_message_add : "ALERT_MESSAGE_ADD",
  alert_message_remove: "ALERT_MESSAGE_REMOVE",

  donation_modal_show: "DONATION_MODAL_SHOW",
  donation_modal_hide: "DONATION_MODAL_HIDE",
  donation_modal_toggle: "DONATION_MODAL_TOGGLE",
}

const uiState = {
  isModalShow: false,
  alertMessage: [],
  isDonationModalShow: false,
}

function reducer(state, action) {
  switch (action.type) {
    case UI_ACTION_TYPE.modal_show:
      return {
        ...state,
        isModalShow: true
      }
    case UI_ACTION_TYPE.modal_hide:
      return {
        ...state,
        isModalShow: false
      }
    case UI_ACTION_TYPE.modal_toggle:
      return {
        ...state,
        isModalShow: !state.isModalShow
      }

    case UI_ACTION_TYPE.alert_message_add:
      return {
        ...state,
        alertMessage: [...state.alertMessage, action.message]
      }
    case UI_ACTION_TYPE.alert_message_remove:
      return {
        ...state,
        alertMessage: state.alertMessage.filter(m => m.id !== action.id)
      }

    case UI_ACTION_TYPE.donation_modal_show:
      return {
        ...state,
        isDonationModalShow: true
      }
    case UI_ACTION_TYPE.donation_modal_hide:
      return {
        ...state,
        isDonationModalShow: false
      }
    case UI_ACTION_TYPE.donation_modal_toggle:
      return {
        ...state,
        isDonationModalShow: !state.isDonationModalShow
      }
    default:
      throw "Undefined ui reducer action type"
  }
}

const UiState = React.createContext(null)
const UiDispatch = React.createContext(null)

export const UiContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, uiState)

  return (
    <UiState.Provider value={state}>
      <UiDispatch.Provider value={dispatch}>
        {children}
      </UiDispatch.Provider>
    </UiState.Provider>
  )
}

export function useUiState() {
  const context = useContext(UiState)
  if(!context)
      throw new Error("Cannot find UiState context")
  return context
}

export function useUiDispatch() {
  const context = useContext(UiDispatch)
  if(!context)
      throw new Error("Cannot find UiDispatch context")
  return context
}