import { SharedModule } from './shared.module';

describe('VendorModule', () => {
  it('should work', () => {
    expect(new SharedModule()).toBeDefined();
  });
});
