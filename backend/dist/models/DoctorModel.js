"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const DoctorSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    specialization: {
        type: String,
    },
    price: {
        type: Number,
    },
    workingHours: {
        start: {
            type: String,
        },
        end: {
            type: String,
        },
    },
    patients: [
        {
            type: Schema.Types.ObjectId,
            ref: "Patient",
        },
    ],
    consultations: [
        {
            doctor: {
                type: Schema.Types.ObjectId,
                ref: "Patient",
                required: true,
            },
            date: {
                type: Date,
                required: true,
            },
        },
    ],
});
const Doctor = mongoose_1.default.model("Doctor", DoctorSchema);
exports.default = Doctor;
