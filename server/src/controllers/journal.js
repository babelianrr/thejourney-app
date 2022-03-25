const { journal, user } = require("../../models")

exports.getJournals = async (req, res) => {
  try {
    let data = await journal.findAll({
      attributes: { exclude: ["userId", "updatedAt"] },
      include: [
        { model: user, as: "user", attributes: { exclude: ["id", "image", "password", "phone", "createdAt", "updatedAt"] } }
      ]
    })
    data = JSON.parse(JSON.stringify(data));
    data = data.map((item) => {
      return {
        ...item,
        image: process.env.PATH_FILE + item.image
      }
    })
    res.status(200).send({ status: "Success", data })
  } catch (error) {
    console.log(error)
    res.status(500).send({ status: "Failed", message: "Server Error" })
  }
}

exports.getJournalx = async (req, res) => {
  try {
    const { id } = req.params
    let data = await journal.findAll({
      where: { userId: id },
      attributes: { exclude: ["updatedAt"] },
      include: [
        { model: user, as: "user", attributes: { exclude: ["id", "image", "password", "phone", "createdAt", "updatedAt"] } }
      ]
    })
    data = JSON.parse(JSON.stringify(data));
    data = data.map((item) => {
      return {
        ...item,
        image: process.env.PATH_FILE + item.image
      }
    })
    res.status(200).send({ status: "Success", data })
  } catch (error) {
    console.log(error)
    res.status(500).send({ status: "Failed", message: "Server Error" })
  }
}

exports.getJournal = async (req, res) => {
  try {
    const { id } = req.params
    let data = await journal.findAll({
      where: { id },
      attributes: { exclude: ["userId", "updatedAt"] },
      include: [
        { model: user, as: "user", attributes: { exclude: ["id", "image", "password", "phone", "createdAt", "updatedAt"] } }
      ]
    })
    data = JSON.parse(JSON.stringify(data));
    data = data.map((item) => {
      return {
        ...item,
        image: process.env.PATH_FILE + item.image
      }
    })
    data = data[0]
    res.status(200).send({ status: "Success", data })
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "Failed", message: "Server Error" })
  }
}

exports.addJournal = async (req, res) => {
  try {
    const { title, userId, description } = req.body
    let data = await journal.create({ title, userId, description, image: req.file.filename })
    data = JSON.parse(JSON.stringify(data))
    data = { ...data, image: process.env.PATH_FILE + data.image }
    res.status(201).send({ status: "Success", data })
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "Failed", message: "Server Error" })
  }
}

exports.editJournal = async (req, res) => {
  try {
    const { id } = req.params
    const { title, userId, description } = req.body
    await journal.update({ title, userId, description }, { where: { id } })
    let data = await journal.findAll({ where: { id }, attributes: { exclude: ["createdAt", "updatedAt"] } })
    // data = JSON.parse(JSON.stringify(data))
    // data = data.map((item) => { return { ...item, image: process.env.PATH_FILE + item.image } })
    res.status(200).send({ status: "Success", data })
  } catch (error) {
    console.log(error)
    res.status(500).send({ status: "Failed", message: "Server error" })
  }
}

exports.delJournal = async (req, res) => {
  try {
    const { id } = req.params
    await journal.destroy({ where: { id } })
    res.status(200).send({ status: "Success", data: { id } })
  } catch (error) {
    console.log(error)
    res.status(500).send({ status: "failed", message: "Server Error" })
  }
}
