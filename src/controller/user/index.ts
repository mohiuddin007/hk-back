import Crud from "../../class/Crud";
import ResponseMessage from "../../class/Response";
const User = require("../../model/user");

const crud = new Crud(User);
const response = new ResponseMessage();

export default class UserClass {

  async save(req: any, res: any) {
    try {
      const saved = await crud._saveData({
        ...req.body,
      });

      const { name, sector, terms, _id } = saved.response;
      const payload = {
        name, sector, terms, _id
      };

      res.json(response.successResponse({ ...payload }));
    } catch (error) {
      console.log({ registerController: error });
      res.status(500).send({ message: "Internal Server Error" });
    }
  }

  async getAllUser(req: any, res: any) {
    try {
      const users = await crud._getAll();

      return res.json(users);
    } catch (err) {
      console.log({ getAllUser: err });
      return res.json(response.serverErrorResponse);
    }
  }

  async updateUser(req: any, res: any) {
    const { id } = req.params;
    const user: object = req.body;
    try {
      const updateUser = await crud._updateData(id, user);
      const { name, sector, terms, _id } = updateUser?.response;
      res.json(
        response.successResponse({ name, sector, terms, _id })
      );
    } catch (error) {
      console.log({ updateUser: error });
      return res.json(response.serverErrorResponse);
    }
  }

   //   Delete 
   async delete(req: any, res: any) {
    const { id } = req.params;
    const deleteUser = await crud._deleteData(id);

    res.json(deleteUser);
  }
}
