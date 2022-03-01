import ApiError from "./ApiError.js"

function errorHandler(err, req, res) {

    if (err instanceof ApiError) {
        res.status(err.code).json(err.message)
        return;
    }

    res.status(500).json('Something went wrong on the server')
}

export default errorHandler