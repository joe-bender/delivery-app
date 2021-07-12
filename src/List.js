export default function List(props) {
  const show = props.columnShow;
  return (
    <div>
      <h2>Dispatch Order List</h2>
      <table>
        <thead>
          <tr>
            <th>Details</th>
            {show.id && <th>Order #</th>}
            {show.name && <th>Name</th>}
            {show.address && <th>Address</th>}
            {show.phone && <th>Phone</th>}
            {show.email && <th>Email</th>}
            {show.timePlaced && <th>Time Placed</th>}
            {show.timePassed && <th>Time Passed</th>}
            {show.timeDelivered && <th>Time Delivered</th>}
            {show.status && <th>Status</th>}
            {show.problem && <th>Problem</th>}
            {show.driver && <th>Driver</th>}
          </tr>
        </thead>
        <tbody>
          {props.orders.map((order) => (
            <tr key={order.id}>
              <td>
                <button
                  type="button"
                  data-id={order.id}
                  onClick={props.handleShowButton}
                >
                  Show
                </button>
              </td>
              {show.id && <td>{order.id}</td>}
              {show.name && <td>{order.name}</td>}
              {show.address && <td>{order.address}</td>}
              {show.phone && <td>{order.phone}</td>}
              {show.email && <td>{order.email}</td>}
              {show.timePlaced && <td>{order.timePlaced}</td>}
              {show.timePassed && <td>{order.timePassed}</td>}
              {show.timeDelivered && <td>{order.timeDelivered}</td>}
              {show.status && (
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
              )}
              {show.problem && (
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
              )}
              {show.driver && (
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
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
