export default function List(props) {
  const show = props.columnShow;
  return (
    <div>
      <h2>Dispatch Order List</h2>
      <table>
        <tr>
          <th>Details</th>
          {show.id && <th>Order #</th>}
          {show.address && <th>Address</th>}
          {show.timePlaced && <th>Time Placed</th>}
          {show.timePassed && <th>Time Passed</th>}
          {show.status && <th>Status</th>}
          {show.problem && <th>Problem</th>}
          {show.driver && <th>Driver</th>}
        </tr>
        {props.orders.map((order) => (
          <tr>
            <td>
              <button type="button">Show</button>
            </td>
            {show.id && <td>{order.id}</td>}
            {show.address && <td>{order.address}</td>}
            {show.timePlaced && <td>{order.timePlaced}</td>}
            {show.timePassed && <td>{order.timePassed}</td>}
            {show.status && (
              <td>
                <select value={order.status}>
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
                <select value={order.problem}>
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
                <select value={order.driver}>
                  <option value="John">John</option>
                  <option value="Ana">Ana</option>
                  <option value="Tomás">Tomás</option>
                  <option value="Carla">Carla</option>
                </select>
              </td>
            )}
          </tr>
        ))}
      </table>
    </div>
  );
}
