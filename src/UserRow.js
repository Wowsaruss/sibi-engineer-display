import React from 'react';
import { Link } from 'react-router-dom';

const UserRow = ({ givenname, surname, id }) => (
    <div className='user-flex' >
        <Link to={`/details/${id}`} >
            <ul className='data-ul-li-main' >
                <li>
                    { givenname }&nbsp;{ surname }
                </li>
            </ul>
        </Link>
    </div>
);

export default UserRow;