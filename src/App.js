import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearcnInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayout } from "./components/templetes/DefaultLayout";
import { HeaderOnly } from "./components/templetes/HeaderOnly";

import "./styles.css";

const user = {
  name: "藤田",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  mail: "s-fujita.csiinc.co.jp",
  TEL: "080-1111-4444",
  company: {
    name: "シーエスアイ"
  },
  website: "https:google.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
