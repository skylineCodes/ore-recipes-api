import express, { Request, Response } from 'express';
import UsersController from '../controllers/UsersController';

const router = express();

/**
 * Fetch registered users
 */
router.get('/fetch_all', async (req: Request, res: Response) => {
  try {
    const resp: any = await UsersController.fetch_all(req?.body);

    return res.status(200).json({
      status: 200,
      data: resp,
    });
  } catch (err) {
    return res.status(400).json({
      status: 'Internal error',
      data: {
        message: err?.message,
      },
    });
  }
});

/**
 * Fetch user by username
 */
router.get('/:username', async (req: Request, res: Response) => {
  try {
    const { username } = req?.params;

    req.body.username = username;

    const resp: any = await UsersController.fetch_by_username(req?.body);

    return res.status(200).json({
      status: 200,
      data: resp,
    });
  } catch (err) {
    return res.status(400).json({
      status: 'Internal error',
      data: {
        message: err?.message,
      },
    });
  }
});

/**
 * Fetch user recipes
 */
router.get('/:username/recipes', async (req: Request, res: Response) => {
  try {
    const { username } = req?.params;

    req.body.username = username;

    const resp: any = await UsersController.fetch_user_recipe(req?.body);

    return res.status(200).json({
      status: 200,
      data: resp,
    });
  } catch (err) {
    return res.status(400).json({
      status: 'Internal error',
      data: {
        message: err?.message,
      },
    });
  }
});

/**
 * Fetch user restaurants
 */
router.get('/:username/restaurants', async (req: Request, res: Response) => {
  try {
    const { username } = req?.params;

    req.body.username = username;

    const resp: any = await UsersController.fetch_user_restaurants(req?.body);

    return res.status(200).json({
      status: 200,
      data: resp,
    });
  } catch (err) {
    return res.status(400).json({
      status: 'Internal error',
      data: {
        message: err?.message,
      },
    });
  }
});

export default router;