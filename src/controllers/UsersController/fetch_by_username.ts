import Joi from "joi";
import { validateAsyncSpec } from "../../util/commonUtil";
import { Users } from "../../models";

type Username = {
  username: string;
}

const schema = Joi.object({
  username: Joi.string().required(),
});

export default async function UserService(data: Username) {
  try {
    // Validate Parameters
    const validatedParams = await validateAsyncSpec(schema, data);

    const { username } = validatedParams;

    const user: any = await Users.findOne({
      where: {
        username,
      },
      attributes: { exclude: ['password', 'id', 'deletedAt'] },
    });

    return user;
  } catch (error) {
    console.log(error);

    throw error;
  }
}