import React from 'react';
import Activity from './Activity';
import ActivityI from '../types/Activity';

interface Props {
  activities: ActivityI[];
}

function ActivityList({ activities }: Props) {
  return (
    <div className="activity-list">
      {activities.map((activity) => (
        <Activity key={activity.id} activity={activity} />
      ))}
    </div>
  );
}

export default ActivityList;
