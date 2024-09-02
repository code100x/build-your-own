import rateLimit from "express-rate-limit"

const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 50, // limit each IP to 50 requests per windowMs
    message: "Too many accounts created from this IP, please try again after a minute"
});
export default limiter