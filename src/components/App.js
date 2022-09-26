import { UserData } from "./Profile/Profile"
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransitionHistory } from "./TransitionHistory/TransitionHistory";

import user from "components/data/user.json"
import data from "components/data/data.json"
import friends from "components/data/friends.json"
import transactions from "components/data/transactions.json"

export const App = () => {
  return (
    <div>
      <UserData
       username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
     
   <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransitionHistory items={transactions} />;
    </div>
    
  )
}

