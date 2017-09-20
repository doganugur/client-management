import { ClientManagementPage } from './app.po';

describe('client-management App', () => {
  let page: ClientManagementPage;

  beforeEach(() => {
    page = new ClientManagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
