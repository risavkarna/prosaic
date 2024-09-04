import { render } from '@testing-library/react';

import Optics from './optics';

describe('Optics', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Optics />);
    expect(baseElement).toBeTruthy();
  });
});
