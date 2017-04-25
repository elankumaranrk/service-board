import { ServiceConsolePage } from './app.po';

describe('service-console App', function() {
  let page: ServiceConsolePage;

  beforeEach(() => {
    page = new ServiceConsolePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
