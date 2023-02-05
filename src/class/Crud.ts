import ResponseMessage from "./Response";

const response = new ResponseMessage();

export default class Crud {

  private modelName: any;
  constructor(name: any) {
    this.modelName = name;
  }

  // save
  async _saveData(data: any) {
    try {
      if (data) {
        const savedData = await this.modelName.create(data);
        return response.successResponse(savedData);
      } else {
        return response.badRequestResponse("Fill Requeued felid");
      }
    } catch (error: any) {
      console.log({ crudSave: error });
      return response.badRequestResponse(error?.message);
    }
  }
  async _saveDataMany(data: any) {
    try {
      if (data) {
        const savedData = await this.modelName.insertMany(data);
        return response.successResponse(savedData);
      } else {
        return response.badRequestResponse("Fill Requeued felid");
      }
    } catch (error: any) {
      console.log({ crudSave: error });
      return response.badRequestResponse(error?.message);
    }
  }

  //  get by filter
  async _getAll(filter: string = "") {
    try {
      const allResponse = await this.modelName
        .find({}, filter)
        .sort({ updatedAt: -1 });
      if (allResponse) {
        return response.successResponse(allResponse);
      } else {
        return response.serverErrorResponse();
      }
    } catch (error) {
      console.log({ crudGetAll: error });
      return response.serverErrorResponse();
    }
  }
  //  get by query
  async _getByQuery(query: object, filter: string = "") {
    try {
      const allResponse = await this.modelName
        .find(query, filter)
        .sort({ updatedAt: -1 });
      if (allResponse) {
        return response.successResponse(allResponse);
      } else {
        return response.serverErrorResponse();
      }
    } catch (error) {
      console.log({ crudGetAll: error });
      return response.serverErrorResponse();
    }
  }
  //  get
  async _getSingle(id: string) {
    try {
      const singleItem = await this.modelName.findById(id);
      if (singleItem) {
        return response.successResponse(singleItem);
      } else {
        return response.serverErrorResponse();
      }
    } catch (error) {
      console.log({ crudGetAll: error });
      return response.serverErrorResponse();
    }
  }

  //  update
  async _updateData(id: string, data: object) {
    try {
      const findData = await this.modelName.findById(id);
      if (findData) {
        const updateData = await this.modelName.findByIdAndUpdate(id, data);

        if (updateData) {
          const updatedData = await this.modelName.findById({ _id: id });
          return response.successResponse(updatedData);
        }
      } else {
        return response.notFoundResponse("Data Not Found");
      }
    } catch (error) {
      console.log({ crudUpdate: error });
      return response.notFoundResponse("Data Not Found");
    }
  }

  // delete
  async _deleteData(id: string) {
    try {
      const deleteData = await this.modelName.findByIdAndRemove(id);
      if (deleteData) {
        return response.successResponse(deleteData);
      } else {
        return response.serverErrorResponse();
      }
    } catch (error) {
      console.log({ delete: error });
      return response.notFoundResponse("Data Not Found");
    }
  }

}


