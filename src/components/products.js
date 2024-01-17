import { useEffect, useState } from 'react';
import './style.css';

export default function Products() {

  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("http://localhost:1212/api/Products")
      .then(response => { return response.json() })
      .then(data => { setUsers(data) })
  }

  useEffect(() => {
    fetchData()
  }, []);


  return (
    <>
      <h1>Employee Data</h1>
      <div className="table-container">
        <div className='inner-table-container'>
          <table className="product-table">
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Manufacturer</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.productId}</td>
                  <td>{user.productName}</td>
                  <td>{user.description}</td>
                  <td>{user.manufacturer}</td>
                  <td>{user.category}</td>
                  <td>{user.price}</td>
                  <td>{user.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </>
  );
}



