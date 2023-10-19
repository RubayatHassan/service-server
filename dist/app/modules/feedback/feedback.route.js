"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const feedback_controller_1 = require("./feedback.controller");
const feedback_validation_1 = require("./feedback.validation");
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), feedback_controller_1.FeedBackController.getAllFromDB);
router.post('/', (0, validateRequest_1.default)(feedback_validation_1.FeedbackValidation.create), (0, auth_1.default)(user_1.ENUM_USER_ROLE.USER), feedback_controller_1.FeedBackController.insertIntoDB);
router.get('/questions', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), feedback_controller_1.FeedBackController.getAllQuestionFromDB);
router.post('/questions', (0, validateRequest_1.default)(feedback_validation_1.FeedbackValidation.createQuestion), feedback_controller_1.FeedBackController.insertQuestionIntoDB);
router.delete('/questions/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), feedback_controller_1.FeedBackController.deleteQuestionByIdFromDB);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), feedback_controller_1.FeedBackController.deleteByIdFromDB);
exports.FeedbackRoutes = router;
