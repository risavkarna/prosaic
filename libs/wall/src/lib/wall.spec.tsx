import { render } from '@testing-library/react';

import Wall from './wall';

describe('Wall', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Wall />);
    expect(baseElement).toBeTruthy();
  });
});
