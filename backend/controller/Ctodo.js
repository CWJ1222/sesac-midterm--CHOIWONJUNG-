const { Todo } = require("../models/index");

/* Todos 전체 목록 불러오기 */
exports.readAll = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    console.log(todos);
    res.send(todos);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

exports.readOne = async (req, res) => {
  try {
    // console.log(req.params);
    const todoId = req.params.id;
    const todoOne = await Todo.findOne({
      where: { id: todoId },
    });
    if (todoOne) {
      return res.send(todoOne);
    } else {
      return res.send({ message: "Todo not found" });
    }
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

/* 새로운 Todo 생성 */
exports.create = async (req, res) => {
  try {
    // console.log(req.body);
    const newTodo = await Todo.create({
      title: req.body.title,
      done: req.body.done,
    });
    if (title === null && done) {
      return res.send({ message: "Internal Server Error" });
    } else {
      res.send(newTodo);
    }
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

/* 기존 Todo 수정 */
exports.update = async (req, res) => {
  try {
    // console.log(req.body);
    const todoId = req.params.id;
    if (todoId) {
      const updatedTodo = await Todo.update(
        {
          title: req.body.title,
          done: req.body.done,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      return res.send(updatedTodo);
    } else {
      return res.send({ message: "Todo not found" });
    }
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

/* 기존 Todo 삭제 */

exports.delete = async (req, res) => {
  try {
    const todoId = req.params.id;
    const isDeleted = await Todo.destroy({
      where: {
        id: todoId,
      },
    });
    if (Boolean(isDeleted)) {
      res.send("삭제성공");
    } else res.sned({ message: "Todo not found" });
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};
