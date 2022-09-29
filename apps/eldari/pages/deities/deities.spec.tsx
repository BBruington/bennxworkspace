import { render } from '@testing-library/react';

import Deities from '.';

describe('Deities', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Deities />);
    expect(baseElement).toBeTruthy();
  });
});
