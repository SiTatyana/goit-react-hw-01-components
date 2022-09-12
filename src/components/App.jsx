import user from "../user.json";
import data from "../data.json";
import friends from "../friends.json";
import transactions from "../transactions.json"
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./Friends/FriendList";
import {TransactionHistory} from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile 
        avatar={user.avatar} 
        username={user.username} 
        tag={user.tag} 
        location={user.location} 
        stats={user.stats}/>

      <Statistics title={data.title} stats={data}/>

      <FriendList friends={friends}/>

      <TransactionHistory items={transactions} />
    </div>
  );
};
