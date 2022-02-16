import React from 'react';
import { useParams } from 'react-router-dom';
import history from '../functions/history';

function InfoToUpdate() {
    type titleParams = {
        title: string;
    }
    const { title } = useParams<titleParams>();

    return (
        <form>
            <button className="btn btn-secondary" formMethod='GET' onClick={() => history.push(`update/${title}`)}>Update</button>
        </form>
    )
}

export default InfoToUpdate;