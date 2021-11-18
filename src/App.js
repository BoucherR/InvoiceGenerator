import { HashRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Invoice from './Invoice'
import Home from './Home'

let App = () => {
  let [name, setName] = useState('');
  let [invoiceNum, setInvoiceNum] = useState('');
  let [houseCity, setHouseCity] = useState('');
  let [provCountry, setProvCountry] = useState('');
  let [date, setDate] = useState(null);
  let [data, setData] = useState(null);
  let [firstParent, setFirstParent] = useState('');
  let [secondParent, setSecondParent] = useState('');

  let [color, setColor] = useState('green');

  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact render={(props) =>
          <Home
            name={name}
            setName={setName}
            invoiceNum={invoiceNum}
            setInvoiceNum={setInvoiceNum}
            houseCity={houseCity}
            setHouseCity={setHouseCity}
            provCountry={provCountry}
            setProvCountry={setProvCountry}
            date={date}
            setDate={setDate}
            data={data}
            setData={setData}
            color={color}
            setColor={setColor}
            firstParent={firstParent}
            setFirstParent={setFirstParent}
            secondParent={secondParent}
            setSecondParent={setSecondParent}
          />}
        />
        <Route path="/Invoice" exact render={(props) =>
          <Invoice
            name={name}
            date={date}
            houseCity={houseCity}
            provCountry={provCountry}
            data={data}
            invoiceNum={invoiceNum}
            color={color}
            firstParent={firstParent}
            secondParent={secondParent}
          />}
        />
      </Switch>
    </HashRouter>

  );
}

export default App;
