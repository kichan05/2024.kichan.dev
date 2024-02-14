import styled from "styled-components";
import {useEffect, useState} from "react";
import { v4 } from "uuid";
import {UI_ACTION_TYPE, useUiDispatch, useUiState} from "../context/UiReducer";
import {logDOM} from "@testing-library/react";
import {GoX} from "react-icons/go";
import {IconButton} from "./IconButton";

const AlertStyle = styled.ul`
  display: inline-block;
  
  position: fixed;
  top: 8px;
  right: 12px;
  
  pointer-events: visible;
`

const AlertMessageStyle = styled.li`
  width: 350px;

  background-color: ${p => p.theme.color.Blue3};
  border-radius: 0.25em;
  padding: 12px;
  margin-bottom: 8px;
  
  .title-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .title {
    font-size: 1.1em;
    font-weight: bold;
  }
  
  .close-icon {
    opacity: 0;
    transition: 200ms;
  }
  
  &:hover .close-icon {
    opacity: 1;
  }

  p {
    margin-top: 4px;
  }
`

const AlertMessage = ({message}) => {
  const uiDispatch = useUiDispatch()

  const removeMessage = (id) => {
    uiDispatch({type: UI_ACTION_TYPE.alert_message_remove, id})
  }

  useEffect(() => {
    const remove = setTimeout(() => {
      removeMessage(message.id)
    }, 5000)
  }, [])

  return (
    <AlertMessageStyle>
      <div className="title-wrap">
        <div className="title">{message.title}</div>
        <IconButton
          width={24}
          size={20}
          className={"close-icon"}
          onClick={() => removeMessage(message.id)}
        ><GoX/></IconButton>
      </div>
      <p>{message.message}</p>
      <p>{message.id}</p>
    </AlertMessageStyle>
  )
}

export const Alert = ({alertMessage}) => {
  return (
    <AlertStyle>
      {alertMessage.map((message, index) => (
        <AlertMessage key={message.id} message={message}/>
      ))}
    </AlertStyle>
  )
}