module.exports = class ApiResponse{

    static errorResponse (statusCode, errorMessage, res) {
        return res.status(statusCode).json({
            success: false,
            errorMessage: errorMessage
        })
    }

    static successResponse (content, res) {
        return res.status(200).json({
            content: content
        })
    }

}
