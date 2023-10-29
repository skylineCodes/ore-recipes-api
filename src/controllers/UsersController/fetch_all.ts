import Joi from "joi";
import { validateAsyncSpec } from "../../util/commonUtil";
import { Users } from "../../models";


const schema = Joi.object({
  // first_name: Joi.string().required(),
});

export default async function UserService(data: any) {
  try {
    // Validate Parameters
    const validatedParams = await validateAsyncSpec(schema, data);
    
    const users: any = await Users.findAll({
      attributes: { exclude: ['password', 'id', 'deletedAt'] },
    });

    return users;
  } catch (error) {
    console.log(error);

    throw error;
  }
}