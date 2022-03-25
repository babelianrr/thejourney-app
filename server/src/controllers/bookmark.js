const { bookmark, user, journal } = require("../../models")

exports.getBookmarks = async (req, res) => {
  try {
    let data = await bookmark.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"], },
      include: [
        {
          model: user, as: "user",
          attributes: { exclude: ["id", "password", "phone", "image", "createdAt", "updatedAt"] }
        },
        {
          model: journal, as: "journal",
          attributes: { exclude: ["userId", "updatedAt"] },
          include: [
            { model: user, as: "user", attributes: { exclude: ["id", "image", "password", "phone", "createdAt", "updatedAt"] } }
          ]
        }
      ]
    })
    data = JSON.parse(JSON.stringify(data));
    data = data.map((item) => {
      return {
        ...item,
        journal: {
          ...item.journal,
          image: process.env.PATH_FILE + item.journal.image
        }
      }
    })
    res.status(200).send({ status: "Success", data })
  } catch (error) {
    console.log(error)
    res.status(500).send({ status: "Failed", message: "Server Error", })
  }
}

exports.getBookmark = async (req, res) => {
  try {
    const { id } = req.params
    let data = await bookmark.findAll({
      where: { userId: id },
      attributes: { exclude: ["updatedAt"], },
      include: [
        {
          model: user, as: "user",
          attributes: { exclude: ["id", "password", "phone", "image", "createdAt", "updatedAt"] },
        },
        {
          model: journal, as: "journal",
          attributes: { exclude: ["userId", "updatedAt"] },
          include: [
            { model: user, as: "user", attributes: { exclude: ["id", "image", "password", "phone", "createdAt", "updatedAt"] } }
          ]
        },
      ]
    })
    data = JSON.parse(JSON.stringify(data));
    data = data.map((item) => {
      return {
        ...item,
        journal: {
          ...item.journal,
          image: process.env.PATH_FILE + item.journal.image
        }
      }
    })
    res.status(200).send({ status: "Success", data })
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "Failed", message: "Server Error", })
  }
}

exports.addBookmark = async (req, res) => {
  try {
    const { journalId, userId } = req.body
    const alreadyExist = await bookmark.findOne({ where: { userId, journalId } })
    if (alreadyExist) {
      await bookmark.destroy({ where: { userId, journalId } });
      res.status(200).send({ message: "Removing bookmark" });
      return;
    };
    const data = await bookmark.create({ journalId, userId })
    res.status(201).send({ status: "Adding bookmark", data })
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "Failed", message: "Server Error", })
  }
}

exports.delBookmark = async (req, res) => {
  try {
    const { id } = req.params
    await bookmark.destroy({ where: { id } })
    res.status(200).send({ status: "Success", data: { id } })
  } catch (error) {
    console.log(error)
    res.status(500).send({ status: "failed", message: "Server Error", })
  }
}
