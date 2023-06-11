import express from "express";

const router = express.Router()

router.get('/health', async (req, res) => {
    res.send(200)
})

module.exports = router