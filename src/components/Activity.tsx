import React from 'react';
import ActivityI from '../types/Activity';

interface Props {
  activity: ActivityI;
}

function Activity({ activity }: Props) {
  return (
    <div className="activity">
      <h3>{activity.title}</h3>
      <p>Price: {activity.price}{activity.currency}</p>
      <p>Rating: {activity.rating}</p>
      <p>Special Offer: {activity.specialOffer ? 'Yes' : 'No'}</p>
      <p>Supplier: {activity.supplierName}</p>
    </div>
  );
}

export default Activity;
