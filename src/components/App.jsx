import Perfil from '../components/Perfil/Perfil';
import  stylePerfil from "./Perfil/Perfil.module.css";
import Statistics from "../components/Statistics/Statistics";
import FrindList from "../components/FriendList/FriendList";
import user from "./data/user.json"
import data from "./data/Estadistica.json";
import Transaction from "../components/transacciones/TransactionHistory";
import Transactions from "./data/transactions.json";


export const App = () => {
  return (
 <>
 <section className={stylePerfil.sectionOne}>
 <Perfil
 username={user.username}
 tag={user.tag}
 location={user.location}
 avatar={user.avatar}
 stats={user.stats}
 />
 </section >
 <br/>
 <hr/>
 <Statistics title="Upload stats" stats={data}/>
<br/>
<hr/>
<section>
  <FrindList/>
</section>
 <br/>
 <hr/>
<section>
<Transaction items={Transactions} />
</section>

 </>
  );
};
