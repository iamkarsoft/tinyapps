import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardComponent = robots.map((user, i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>

    })
    return (
        <div className="grid grid-cols-5 gap-6">
		 	{cardComponent}
		  </div>
    );
}


export default CardList;