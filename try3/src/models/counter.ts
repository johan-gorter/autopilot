// src/models/Counter.ts

import mongoose from 'mongoose';

const counterSchema = new mongoose.Schema({
    _id: String,
    seq: { type: Number, default: 0 }
});

const Counter = mongoose.model('Counter', counterSchema);

export default Counter;