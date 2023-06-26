import React,{useContext} from 'react';
import axios from 'axios';
import { ShoppingContext } from '../../../config/ShoppingContext';
import { LoginContext } from '../../../config/LoginContext';

export default function Cart() {
    const {orders, setOrders} = useContext(LoginContext);
    const {prod, setProd} = useContext(LoginContext);
useE
    return (
        <div className="row my-4">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Subtotal</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                orders.map(item => (
                                    <tr key={item.id}>
                                        
                                        <th scope="row">{item.id}</th>
                                        <td>
                                            <img src={require(`../../../images/products/pasta (${prod.find((el,i)=>el.id===item.product_id).img}).png`)} alt={item.product_name} 
                                                className="img-fluid rounded" 
                                                width={60} height={60} />
                                        </td>
                                        <td>{item.product_name}</td>
                                        <td>
         
                                            <span className="mx-2">
                                                {item.product_quantity}
                                            </span>
      
                                        </td>
                                        <td>{prod.find((el,i)=>el.id===item.product_id).price}MAD</td>
                                       
                                        <td>
                                            <i 
                                                className="bi bi-cart-x text-danger"
                                                style={{cursor: 'pointer'}}
                                          /*       onClick={() => removeFromCart(item)} */
                                            ></i>
                                        </td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <th colSpan={3} className="text-center">
                                    Total
                                </th>
                                <th colSpan={3} className="text-center">
                                    <span className="badge bg-danger rounded-pill">
                                        $
                                      {/*   {
                                            cartItems.reduce((acc,item) => acc += item.price * item.quantity,0)
                                        } */}
                                    </span>
                                </th>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
