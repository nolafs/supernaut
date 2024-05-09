import { render } from '@testing-library/react';

import ContentProfileItem from './content-profile-item';

describe('ContentProfileItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContentProfileItem key={1} item={{
      id:'test',
      image: 'https://via.placeholder.com/735x810',
      socials: [],
      name: 'John Doe',
      title: 'Software Engineer',
      description: 'John is a software engineer with a passion for developing web applications.',
    }} />);
    expect(baseElement).toBeTruthy();
  });
});
