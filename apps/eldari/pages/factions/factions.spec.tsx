import { render } from '@testing-library/react';

import Factions from '.';

describe('Factions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Factions />);
    expect(baseElement).toBeTruthy();
  });
});
