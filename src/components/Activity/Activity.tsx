import React from 'react';
import activityImage from '../../img/berlin.svg'
import './Activity.css';
import ActivityI from '../../types/Activity';

interface Props {
  activity: ActivityI;
}

function Activity({ activity }: Props) {
    return (
      <div className="activity">
        <div className="activity-image">
        <img src={activityImage} alt={activity.title} />
      </div>
        <h3 className="activity-title">{activity.title}</h3>
        <p className="activity-price">Price: {activity.price}{activity.currency}</p>
        <p className="activity-rating">Rating: {activity.rating}</p>
        <p className="activity-offer">Special Offer: {activity.specialOffer ? 'Yes' : 'No'}</p>
        <p className="activity-supplier">Supplier: {activity.supplierName}</p>
      </div>
    );
  }

export default Activity;
