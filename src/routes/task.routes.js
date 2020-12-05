import {  Router } from 'express';
import TaskController from '../controllers/TaskController';
const router = Router();


router.get('/', TaskController.getAll);
router.get('/:id', TaskController.getOneById);
router.post('/', TaskController.addTask);
router.delete('/:id', TaskController.delete);
router.put('/:id', TaskController.update);


export default router;