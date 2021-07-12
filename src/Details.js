export default function Details(props) {
  const order = props.order;
  const show = props.columnShow;

  const handleCheck = props.handleCheck;

  return (
    <div>
      <h2>Dispatch Order Details</h2>
      <button type="button" onClick={props.closeDetails}>
        Close
      </button>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Info</th>
            <th>Show</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Order #</td>
            <td>{order.id}</td>
            <td>
              <input
                type="checkbox"
                name="id"
                checked={show.id}
                onChange={handleCheck}
              />
            </td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{order.name}</td>
            <td>
              <input
                type="checkbox"
                name="name"
                checked={show.name}
                onChange={handleCheck}
              />
            </td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{order.address}</td>
            <td>
              <input
                type="checkbox"
                name="address"
                checked={show.address}
                onChange={handleCheck}
              />
            </td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{order.phone}</td>
            <td>
              <input
                type="checkbox"
                name="phone"
                checked={show.phone}
                onChange={handleCheck}
              />
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{order.email}</td>
            <td>
              <input
                type="checkbox"
                name="email"
                checked={show.email}
                onChange={handleCheck}
              />
            </td>
          </tr>
          <tr>
            <td>Time Placed</td>
            <td>{order.timePlaced}</td>
            <td>
              <input
                type="checkbox"
                name="timePlaced"
                checked={show.timePlaced}
                onChange={handleCheck}
              />
            </td>
          </tr>
          <tr>
            <td>Time Passed</td>
            <td>{order.timePassed}</td>
            <td>
              <input
                type="checkbox"
                name="timePassed"
                checked={show.timePassed}
                onChange={handleCheck}
              />
            </td>
          </tr>
          <tr>
            <td>Time Delivered</td>
            <td>{order.timeDelivered}</td>
            <td>
              <input
                type="checkbox"
                name="timeDelivered"
                checked={show.timeDelivered}
                onChange={handleCheck}
              />
            </td>
          </tr>
          <tr>
            <td>Status</td>
            <td>
              <select
                data-id={order.id}
                name="status"
                value={order.status}
                onChange={props.handleSelectChange}
              >
                <option value="placed">Placed</option>
                <option value="packed">Packed</option>
                <option value="assigned">Assigned</option>
                <option value="out">Out</option>
                <option value="delivered">Delivered</option>
              </select>
            </td>
            <td>
              <input
                type="checkbox"
                name="status"
                checked={show.status}
                onChange={handleCheck}
              />
            </td>
          </tr>
          <tr>
            <td>Problem</td>
            <td>
              <select
                data-id={order.id}
                name="problem"
                value={order.problem}
                onChange={props.handleSelectChange}
              >
                <option value="none">None</option>
                <option value="payment">Payment</option>
                <option value="packing">Packing</option>
                <option value="delivery">Delivery</option>
                <option value="mistake">Mistake</option>
              </select>
            </td>
            <td>
              <input
                type="checkbox"
                name="problem"
                checked={show.problem}
                onChange={handleCheck}
              />
            </td>
          </tr>
          <tr>
            <td>Driver</td>
            <td>
              <select
                data-id={order.id}
                name="driver"
                value={order.driver}
                onChange={props.handleSelectChange}
              >
                <option value="John">John</option>
                <option value="Ana">Ana</option>
                <option value="Tomás">Tomás</option>
                <option value="Carla">Carla</option>
              </select>
            </td>
            <td>
              <input
                type="checkbox"
                name="driver"
                checked={show.driver}
                onChange={handleCheck}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
