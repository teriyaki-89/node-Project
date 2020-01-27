const mongoose = require("mongoose");

const validator = require("validator");

const Tasks = mongoose.model("Tasks", {
    description: { type: String, required: true },
    completed: {
        type: Boolean,
        required: true,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
});

module.exports = Tasks;
