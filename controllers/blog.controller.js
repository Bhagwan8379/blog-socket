const asynchandler = require("express-async-handler")
const Blog = require("../models/Blog")


exports.createBlog = asynchandler(async (req, res) => {
    await Blog.create(req.body)
    res.json({ message: "blog created Success" })
})
exports.readBlog = asynchandler(async (req, res) => {
    const result = await Blog.find()
    res.json({ message: "blog read Success", result })
})
exports.updateBlog = asynchandler(async (req, res) => {
    await Blog.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "blog update Success" })
})
exports.deleteBlog = asynchandler(async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id, req.body)
    res.json({ message: "blog delete Success" })
})