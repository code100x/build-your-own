const Logger = (
    req: any,
    res: any,
    next: any
  ) => {
    console.log("Middleware Error handling");
    req.time = new Date(Date.now()).toString();
    console.log(req.method,req.hostname, req.path, req.time);
    next();
  };
  
  export default Logger;
  