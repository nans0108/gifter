const createRequestMiddleware: Function = () => {
  return () => (next: Function) => (action: Object) => {
    return next(action);
  };
};

export default createRequestMiddleware;
