

export const globalError = (error, req, res, next) => {
    res.status(error.statusCode || 500)
        .json(
            {
                message: error.message,
                code: error.statusCode,
                stack:error.stack
            })
}