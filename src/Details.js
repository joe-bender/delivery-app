export default function Details(props) {
  const order = props.order;
  const show = props.columnShow;
  return (
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
          <td>{order.id}</td>
          <td>
            <input type="checkbox" name="id" checked={show.id} />
          </td>
        </tr>
        <tr>
          <td>Name</td>
          <td>{order.name}</td>
          <td>
            <input type="checkbox" name="name" checked={show.name} />
          </td>
        </tr>
        <tr>
          <td>Address</td>
          <td>{order.address}</td>
          <td>
            <input type="checkbox" name="address" checked={show.address} />
          </td>
        </tr>
        <tr>
          <td>Phone</td>
          <td>{order.phone}</td>
          <td>
            <input type="checkbox" name="phone" checked={show.phone} />
          </td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{order.email}</td>
          <td>
            <input type="checkbox" name="email" checked={show.email} />
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
            />
          </td>
        </tr>
        <tr>
          <td>Status</td>
          <td>
            <select value={order.status}>
              <option value="placed">Placed</option>
              <option value="packed">Packed</option>
              <option value="assigned">Assigned</option>
              <option value="out">Out</option>
              <option value="delivered">Delivered</option>
            </select>
          </td>
          <td>
            <input type="checkbox" name="status" checked={show.status} />
          </td>
        </tr>
        <tr>
          <td>Problem</td>
          <td>
            <select value={order.problem}>
              <option value="none">None</option>
              <option value="payment">Payment</option>
              <option value="packing">Packing</option>
              <option value="delivery">Delivery</option>
              <option value="mistake">Mistake</option>
            </select>
          </td>
          <td>
            <input type="checkbox" name="problem" checked={show.problem} />
          </td>
        </tr>
        <tr>
          <td>Driver</td>
          <td>
            <select value={order.driver}>
              <option value="john">John</option>
              <option value="ana">Ana</option>
              <option value="tomás">Tomás</option>
              <option value="carla">Carla</option>
            </select>
          </td>
          <td>
            <input type="checkbox" name="driver" checked={show.driver} />
          </td>
        </tr>
      </table>
    </div>
  );
}
