import styled from "styled-components";
import { SearchInput } from "../molecules/SearcnInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `藤田${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    mail: "s-fujita.csiinc.co.jp",
    TEL: "080-1111-4444",
    company: {
      name: "シーエスアイ"
    },
    website: "https:google.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>User一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
