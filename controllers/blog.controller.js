const asynchandler = require("express-async-handler")
const Blog = require("../models/Blog")
const { io } = require("../socket/Scoket")

exports.createBlog = asynchandler(async (req, res) => {
    await Blog.create(req.body)
    const result = Blog.find()
    io.emit("blog-create", result)
    res.json({ message: "blog created Success" })
})
exports.readBlog = asynchandler(async (req, res) => {
    const result = await Blog.find()
    io.emit("blog-create", result)
    res.json({ message: "blog read Success", result })
})
exports.updateBlog = asynchandler(async (req, res) => {
    await Blog.findByIdAndUpdate(req.params.id, req.body)
    const result = await Blog.find()
    io.emit("blog-create", result)
    res.json({ message: "Blog Updated Success" })
})
exports.deleteBlog = asynchandler(async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id, req.body)
    const result = await Blog.find()
    io.emit("blog-create", result)
    res.json({ message: "blog delete Success" })
})