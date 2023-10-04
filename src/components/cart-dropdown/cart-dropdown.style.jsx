import styled from 'styled-components'
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.style'

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},${GoogleSignInButton},${InvertedButton} {
    position: absolute;
    bottom: 10px;
    white-space: nowrap;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`

export const CartItems = styled.div`
  height: 240px;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
    padding-bottom: 50px;
    padding-right: 8px; // Reserve space for the scrollbar

    // WebKit browsers: Hide the scrollbar by default but reserve space for it
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background: transparent; // Initially set to transparent to hide it
    }

    // WebKit browsers: Show the scrollbar when hovering
    &:hover::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 4px;
    }

    // For Firefox: Set the scrollbar to "auto" 
    scrollbar-width: auto;
`
