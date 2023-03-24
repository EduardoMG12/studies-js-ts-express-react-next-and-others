export const checkCsurfError = ({ err, req, res, next }: any) => {
    if (err && err.code === "EBADCSRFTOKEN") res.send("BAD CSURF")
}

export const csurfMiddlewareToken = ({ req, res, next }: any) => {
    res.locals.csurfToken = req.csurfToken();
    next();
}