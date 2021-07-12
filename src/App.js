import { useState } from "react";
import "./App.css";
import List from "./List";
import Details from "./Details";

function App() {
  const [orders, setOrders] = useState([
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
  ]);

  // setOrders((prev) => {
  //   let curr = prev.map((x) => x);
  //   return curr;
  // });

  const [detailsId, setDetailsId] = useState(null);

  const [columnShow, setColumnShow] = useState({
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
  });

  const handleCheck = (e) => {
    setColumnShow((prev) => {
      let newShow = { ...prev };
      newShow[e.target.name] = e.target.checked;
      return newShow;
    });
  };

  const handleShowButton = (e) => {
    const id = e.target.dataset.id;
    setDetailsId(parseInt(id));
  };

  const closeDetails = () => {
    setDetailsId(null);
  };

  const handleSelectChange = (e) => {
    let id = parseInt(e.target.dataset.id);
    let name = e.target.name;
    let choice = e.target.value;
    setOrders((prev) => {
      let curr = prev.map((x) => ({ ...x }));
      let order = curr.filter((order) => order.id === id)[0];
      order[name] = choice;
      return curr;
    });
  };

  return (
    <div className="App">
      <h1>Delivery App</h1>
      <nav>
        <button type="button">Dispatch</button>
        <button type="button">Driver</button>
        <button type="button">Packer</button>
      </nav>
      <List
        orders={orders}
        columnShow={columnShow}
        handleShowButton={handleShowButton}
        handleSelectChange={handleSelectChange}
      />
      {detailsId !== null && (
        <Details
          order={orders.filter((order) => order.id === detailsId)[0]}
          columnShow={columnShow}
          handleCheck={handleCheck}
          closeDetails={closeDetails}
          handleSelectChange={handleSelectChange}
        />
      )}
    </div>
  );
}

export default App;
