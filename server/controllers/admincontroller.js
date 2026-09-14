import User from "../models/userModel.js";

const getAllUsers = async (req, res) => {
    const users = await User.find()

    if (!users) {
        res.status(404)
        throw new Error("Users Not Found!")
    }

    res.status(200).json(users)

}

const adminservices ={
    getAllUsers
}

export default adminservices