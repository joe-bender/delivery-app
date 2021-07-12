import "./App.css";
import List from "./List";
import Details from "./Details";

const orders = [
  {
    id: 23,
    name: "John Smith",
    address: "123 E Fake St",
    phone: "555-555-5555",
    email: "customer@email.com",
    timePlaced: "11:42am",
    timePassed: "0:12",
    timeDelivered: "12:01pm",
    status: "packed",
    problem: "payment",
    driver: "Ana",
  },
  {
    id: 24,
    name: "Fake Nameson",
    address: "4321 N Real St",
    phone: "555-123-4567",
    email: "fake@nameson.com",
    timePlaced: "11:47am",
    timePassed: "0:07",
    timeDelivered: "12:12pm",
    status: "assigned",
    problem: "packing",
    driver: "Carla",
  },
];

const columnShow = {
  id: true,
  name: false,
  address: true,
  phone: false,
  email: false,
  timePlaced: true,
  timePassed: true,
  timeDelivered: false,
  status: true,
  problem: true,
  driver: true,
};

let details = 0;

function App() {
  return (
    <div className="App">
      <h1>Delivery App</h1>
      <nav>
        <button type="button">Dispatch</button>
        <button type="button">Driver</button>
        <button type="button">Packer</button>
      </nav>
      <List orders={orders} columnShow={columnShow} />
      {details !== null && (
        <Details order={orders[details]} columnShow={columnShow} />
      )}
    </div>
  );
}

export default App;
