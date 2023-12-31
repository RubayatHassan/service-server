"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const course_controller_1 = require("./course.controller");
const course_validations_1 = require("./course.validations");
const router = express_1.default.Router();
router.get('/', course_controller_1.CourseController.getAllFromDB);
router.get('/:serviceId/service', course_controller_1.CourseController.getCoursesByService);
router.get('/:id', course_controller_1.CourseController.getByIdFromDB);
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(course_validations_1.CourseValidations.create), course_controller_1.CourseController.insertIntoDB);
router.patch('/:id', (0, validateRequest_1.default)(course_validations_1.CourseValidations.update), (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), course_controller_1.CourseController.updateOneInDB);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), course_controller_1.CourseController.deleteByIdFromDB);
exports.CourseRoutes = router;
