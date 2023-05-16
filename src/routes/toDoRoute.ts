import { Router } from 'express';
import {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
} from '../controllers/ToDoControllers.ts';

const router = Router();

router.get('/', getToDo);
router.post('/save', saveToDo);
router.post('/update', updateToDo);
router.delete('/delete', deleteToDo);

export default router;
