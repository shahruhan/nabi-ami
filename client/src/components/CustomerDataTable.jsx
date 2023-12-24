import React from 'react';
 
const CustomerDataTable = ({customerData}) => {
    let id = 0;
    let customerDataArr = Array.from(customerData)
    return(
       
        <>
        <tbody>
            {
                
                customerDataArr.map( (currentData) => {

                    id = id+1;

                    const {_id, c_name, c_contact, c_gender, c_address, c_ticket_from, c_ticket_no,
                        c_relation, c_company, c_nights, c_roomType, c_voucher,
                        c_packagePrices, c_transaction, c_blanceAmount, c_receivingDate, c_travelDate } = currentData;
             
                    return(
                       <tr key={id}>
                            <td>{id}</td>
                            <td>{c_receivingDate}</td>
                            <td>{c_name}</td>
                            <td>{c_gender}</td>
                            <td>{c_relation}</td>
                            <td>{c_ticket_no}</td>
                            <td>{c_voucher}</td>
                            <td>{c_packagePrices}</td>
                            <td>{c_transaction}</td>
                            <td>{c_blanceAmount}</td>
                            <td>{c_travelDate}</td>
                            <td>{c_ticket_from}</td>
                            <td>{c_company}</td>
                            <td>{c_nights}</td>
                            <td>{c_roomType}</td>
                            <td>{c_contact}</td>
                            <td>{c_address}</td>
                            <td>Acton</td>
                       </tr>
                    )
             
                })
            }
            </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th><b>TOTAL</b></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th>928,43534</th>
                                                        <th>2875429</th>
                                                        <th>9284752</th>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                    </tr>
                                                </tfoot>
        </>
    )
}
 
export default CustomerDataTable;