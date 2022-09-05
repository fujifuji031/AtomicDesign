import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  console.log("PrimaryButton");
  const { children } = props;
  return <SButton>{children}</SButton>;
};

//styled(上書きしたいスタイル)
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
