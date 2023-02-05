"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Crud_1 = __importDefault(require("../../class/Crud"));
var Response_1 = __importDefault(require("../../class/Response"));
var User = require("../../model/user");
var crud = new Crud_1.default(User);
var response = new Response_1.default();
var UserClass = /** @class */ (function () {
    function UserClass() {
    }
    UserClass.prototype.save = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var saved, _a, name_1, sector, terms, _id, payload, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, crud._saveData(__assign({}, req.body))];
                    case 1:
                        saved = _b.sent();
                        _a = saved.response, name_1 = _a.name, sector = _a.sector, terms = _a.terms, _id = _a._id;
                        payload = {
                            name: name_1, sector: sector, terms: terms, _id: _id
                        };
                        res.json(response.successResponse(__assign({}, payload)));
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log({ registerController: error_1 });
                        res.status(500).send({ message: "Internal Server Error" });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserClass.prototype.getAllUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var users, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, crud._getAll()];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, res.json(users)];
                    case 2:
                        err_1 = _a.sent();
                        console.log({ getAllUser: err_1 });
                        return [2 /*return*/, res.json(response.serverErrorResponse)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserClass.prototype.updateUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, user, updateUser, _a, name_2, sector, terms, _id, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = req.params.id;
                        user = req.body;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, crud._updateData(id, user)];
                    case 2:
                        updateUser = _b.sent();
                        _a = updateUser === null || updateUser === void 0 ? void 0 : updateUser.response, name_2 = _a.name, sector = _a.sector, terms = _a.terms, _id = _a._id;
                        res.json(response.successResponse({ name: name_2, sector: sector, terms: terms, _id: _id }));
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _b.sent();
                        console.log({ updateUser: error_2 });
                        return [2 /*return*/, res.json(response.serverErrorResponse)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //   Delete 
    UserClass.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, deleteUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, crud._deleteData(id)];
                    case 1:
                        deleteUser = _a.sent();
                        res.json(deleteUser);
                        return [2 /*return*/];
                }
            });
        });
    };
    return UserClass;
}());
exports.default = UserClass;
