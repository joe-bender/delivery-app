import "./App.css";

const orders = [
  {
    id: 23,
    address: "123 E Fake St",
    timePlaced: "11:42am",
    timePassed: "0:12",
    status: "placed",
    problem: "none",
    driver: "John",
  },
  {
    id: 24,
    address: "4321 N Real St",
    timePlaced: "11:47am",
    timePassed: "0:07",
    status: "placed",
    problem: "none",
    driver: "Ana",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Delivery App</h1>
      <nav>
        <button type="button">Dispatch</button>
        <button type="button">Driver</button>
        <button type="button">Packer</button>
      </nav>
      <div>
        <h2>Dispatch Order List</h2>
        <table>
          <tr>
            <th>Details</th>
            <th>Order #</th>
            <th>Address</th>
            <th>Time Placed</th>
            <th>Time Passed</th>
            <th>Status</th>
            <th>Problem</th>
            <th>Driver</th>
          </tr>
          <tr>
            <td>
              <button type="button">Show</button>
            </td>
            <td>23</td>
            <td>123 E Fake St</td>
            <td>11:42am</td>
            <td>0:12</td>
            <td>
              <select name="status">
                <option value="placed">Placed</option>
                <option value="packed">Packed</option>
                <option value="assigned">Assigned</option>
                <option value="out">Out</option>
                <option value="delivered">Delivered</option>
              </select>
            </td>
            <td>
              <select name="problem">
                <option value="none">None</option>
                <option value="payment">Payment</option>
                <option value="packing">Packing</option>
                <option value="delivery">Delivery</option>
                <option value="mistake">Mistake</option>
              </select>
            </td>
            <td>
              <select name="driver">
                <option value="john">John</option>
                <option value="ana">Ana</option>
                <option value="tomás">Tomás</option>
                <option value="carla">Carla</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button">Show</button>
            </td>
            <td>24</td>
            <td>4321 N Real St</td>
            <td>11:47am</td>
            <td>0:07</td>
            <td>
              <select name="status">
                <option value="placed">Placed</option>
                <option value="packed">Packed</option>
                <option value="assigned">Assigned</option>
                <option value="out">Out</option>
                <option value="delivered">Delivered</option>
              </select>
            </td>
            <td>
              <select name="problem">
                <option value="none">None</option>
                <option value="payment">Payment</option>
                <option value="packing">Packing</option>
                <option value="delivery">Delivery</option>
                <option value="mistake">Mistake</option>
              </select>
            </td>
            <td>
              <select name="driver">
                <option value="john">John</option>
                <option value="ana">Ana</option>
                <option value="tomás">Tomás</option>
                <option value="carla">Carla</option>
              </select>
            </td>
          </tr>
        </table>
      </div>
      <div>
        <h2>Dispatch Order Details</h2>
        <table>
          <tr>
            <th>Field</th>
            <th>Info</th>
            <th>Show</th>
          </tr>
          <tr>
            <td>Order #</td>
            <td>23</td>
            <td>
              <input type="checkbox" name="id" />
            </td>
          </tr>
          <tr>
            <td>Name</td>
            <td>John Smith</td>
            <td>
              <input type="checkbox" name="id" />
            </td>
          </tr>
          <tr>
            <td>Address</td>
            <td>123 Fake St</td>
            <td>
              <input type="checkbox" name="id" />
            </td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>555-555-5555</td>
            <td>
              <input type="checkbox" name="id" />
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>customer@email.com</td>
            <td>
              <input type="checkbox" name="id" />
            </td>
          </tr>
          <tr>
            <td>Time Placed</td>
            <td>11:42am</td>
            <td>
              <input type="checkbox" name="id" />
            </td>
          </tr>
          <tr>
            <td>Time Passed</td>
            <td>0:12</td>
            <td>
              <input type="checkbox" name="id" />
            </td>
          </tr>
          <tr>
            <td>Time Delivered</td>
            <td>-</td>
            <td>
              <input type="checkbox" name="id" />
            </td>
          </tr>
          <tr>
            <td>Status</td>
            <td>
              <select name="status">
                <option value="placed">Placed</option>
                <option value="packed">Packed</option>
                <option value="assigned">Assigned</option>
                <option value="out">Out</option>
                <option value="delivered">Delivered</option>
              </select>
            </td>
            <td>
              <input type="checkbox" name="id" />
            </td>
          </tr>
          <tr>
            <td>Problem</td>
            <td>
              <select name="problem">
                <option value="none">None</option>
                <option value="payment">Payment</option>
                <option value="packing">Packing</option>
                <option value="delivery">Delivery</option>
                <option value="mistake">Mistake</option>
              </select>
            </td>
            <td>
              <input type="checkbox" name="id" />
            </td>
          </tr>
          <tr>
            <td>Driver</td>
            <td>
              <select name="driver">
                <option value="john">John</option>
                <option value="ana">Ana</option>
                <option value="tomás">Tomás</option>
                <option value="carla">Carla</option>
              </select>
            </td>
            <td>
              <input type="checkbox" name="id" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
