const ErrorHandler = (
  err: { statusCode: number; message: string; stack: any },
  req: any,
  res: any,
  next: any
) => {
  console.log("Middleware Error handling");
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === "development" ? err.stack : {},
  });
};

export default ErrorHandler;
