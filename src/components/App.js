import { UserData } from "./Profile/Profile"
import { Statistics } from "./Statistics/Statistics";
import user from "components/user.json"
import data from "components/data.json"

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
      {/* <TransitionHistory items={transactions} /> */}
   <Statistics title="Upload stats" stats={data} />
   
    </div>
    
  );
};

