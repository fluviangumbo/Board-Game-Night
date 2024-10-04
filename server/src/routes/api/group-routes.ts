import express from 'express';
import { createGroup, getGroupById, getMembers, getMemberById, } from '../../controllers/groupsController';

const router = express.Router();

router.get('/:id', getGroupById);

router.post('/', createGroup);