import { render } from '@testing-library/react';

import Deities from './index';

describe('Deities', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Deities />);
    expect(baseElement).toBeTruthy();
  });
});
