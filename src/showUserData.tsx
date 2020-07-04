import React, { useMemo, useState } from 'react';
import makeData from './makeData';

const ShowUserData = (props: any) => {
    const [sampleData, setSampleData] = useState(useMemo(() => makeData(12), []));

    const removeRow = (phone: number) => {
        const filterArray = sampleData.filter(( obj: any ) => {
            return obj.phone !== phone;
        });
        setSampleData(filterArray);
    }

    const deleteButton = (phone: any) => {
        return(
            <button onClick={() => removeRow(phone)}> x </button>
        )
    };
    
    return (
        <table className="userData">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Street Number/Name</th>
                    <th>City</th>
                    <th>Phone Number</th>
                    <th>GPA</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {sampleData.map((user: any, index: number) => (
                    <tr key={index}>
                        <td><a href="javascript:void('0')" onClick={() => props.showUserDetails()}>{user.firstName}</a></td>
                        <td><a href="javascript:void('0')" onClick={() => props.showUserDetails()}>{user.lastName}</a></td>
                        <td>{user.street}</td>
                        <td>{user.city}</td>
                        <td>{user.phone}</td>
                        <td>{user.gpa}</td>
                        <td>{deleteButton(user.phone)}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
              <div className="backLink" onClick={() => props.showForm()}>Back</div>
            </tfoot>
        </table>
    );
};

export default ShowUserData;    