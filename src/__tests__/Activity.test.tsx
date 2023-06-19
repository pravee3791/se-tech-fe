import React from 'react';
import { render } from '@testing-library/react';
import Activity from '../components/Activity/Activity';

const activity = {
  id: 25651,
  title: 'German Tour: Parliament Quarter & Reichstag glass dome',
  price: 14,
  currency: '$',
  rating: 4.8,
  specialOffer: false,
  supplierId: 1,
  supplierName: 'John Doe',
};

describe('Activity component', () => {
  test('renders activity details correctly', () => {
    const { getByAltText, getByText } = render(<Activity activity={activity} />);

    const activityImage = getByAltText(activity.title);
    const activityTitle = getByText(activity.title);
    const activityPrice = getByText(`Price: ${activity.price}${activity.currency}`);
    const activityRating = getByText(`Rating: ${activity.rating}`);
    const activityOffer = getByText(`Special Offer: ${activity.specialOffer ? 'Yes' : 'No'}`);
    const activitySupplier = getByText(`Supplier: ${activity.supplierName}`);

    expect(activityImage).toBeInTheDocument();
    expect(activityTitle).toBeInTheDocument();
    expect(activityPrice).toBeInTheDocument();
    expect(activityRating).toBeInTheDocument();
    expect(activityOffer).toBeInTheDocument();
    expect(activitySupplier).toBeInTheDocument();
  });
});
