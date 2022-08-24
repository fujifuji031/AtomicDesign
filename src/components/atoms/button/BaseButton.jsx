import styled from "styled-components";

export const BaseButton = styled.button`
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  &:hover {
    cursor: pointer; /*マウス合わせたときにカーソルのアイコンが変わる*/
    opacity: 0.8;　/*マウス合わせた時に色が変わる*/
  }
`;
