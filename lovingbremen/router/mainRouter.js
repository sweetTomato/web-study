const express = require('express');
const router = express.Router();
const db = require('../model/db');

router.get("/main", function (req, res) {
    res.render("main");
})


router.post("/todo/create", function (req, res) {

    let todo_text = req.body.todo_text;
    let todo_id = req.body.todo_id;
    let todo_show = req.body.todo_show;

    db.todos.create({
        todo_text: todo_text,
        todo_id: todo_id,
        todo_show: todo_show

    }).then(function (result) {
        res.send({ success: 300 })
    })
})

router.post("/todo/updateshow", function (req, res) {
    let todo_id = req.body.todo_id;

    db.todos.update({todo_show:true}, {where:{todo_id:todo_id}}).then(function(result){
        res.send({success:200});
    })
})

router.post("/todo/updateunshow", function (req, res) {
    let todo_id = req.body.todo_id;

    db.todos.update({todo_show:false}, {where:{todo_id:todo_id}}).then(function(result){
        res.send({success:200});
    })
})

router.get("/todo/read", function (req, res) {

    db.todos.findAll().then(function (result) {
        res.send({ success: 100, data: result });
    })
})

module.exports = router;