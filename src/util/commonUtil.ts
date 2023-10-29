import Joi from 'joi';

export async function validateAsyncSpec(
  spec: Joi.Schema,
  data: any,
  optionalConfig = {}
) {
  try {
    const value = await spec.validateAsync(data, {
      allowUnknown: true,
      stripUnknown: true,
      errors: {
        wrap: {
          label: '',
        },
      },
      ...optionalConfig,
    });
    return value;
  } catch (error) {
    throw new Error(error.message);
  }
}
