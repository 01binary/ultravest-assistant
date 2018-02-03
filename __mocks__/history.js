export const listen = jest.fn();
export const createBrowserHistory = () => ({ listen });
