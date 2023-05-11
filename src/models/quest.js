/**
 * {
    equipment: {
        sword: {
            name: string;
            damage: number;
            img: string; //url
        },
        armor: {
            name: string;
            defense: number;
            img: string; //url
        },
        ring: {
            name: string;
            effect: {
                type: string;
                qtd: number;
            },
            img: string; //url
        } | null,
        bracelet: {
            name: string;
            effect: {
                type: string;
                qtd: number;
            },
            img: string; //url
        } | null
    },
    cards: [
        {
            name: string;
            description: string;
            effect: {
                type: string;
                qtd: number;
            },
            img: string; //url
        },
        ...
    ] max 4 itens,
    supplies: [
        {
            name: string;
            description: string;
            effect: {
                type: string;
                qtd: number;
            },
            img: string; //url
        },
        ...
    ] max 4 itens
} 

 */

const mongoose = require('mongoose');

const questSchema = new mongoose.Schema({
    equipment: {
        sword: {
            name: { type: String, required: true },
            damage: { type: Number, required: true },
            img: { type: String, required: true }
        },
        armor: {
            name: { type: String, required: true },
            defense: { type: Number, required: true },
            img: { type: String, required: true }
        },
        ring: {
            name: { type: String, required: true },
            effect: {
                type: { type: String, required: true },
                qtd: { type: Number, required: true }
            },
            img: { type: String, required: true }
        },
        bracelet: {
            name: { type: String, required: true },
            effect: {
                type: { type: String, required: true },
                qtd: { type: Number, required: true }
            },
            img: { type: String, required: true }
        }
    },
    cards: [
        {
            name: { type: String, required: true },
            description: { type: String, required: true },
            effect: {
                type: { type: String, required: true },
                qtd: { type: Number, required: true }
            },
            img: { type: String, required: true }
        }
    ],
    supplies: [
        {
            name: { type: String, required: true },
            description: { type: String, required: true },
            effect: {
                type: { type: String, required: true },
                qtd: { type: Number, required: true }
            },
            img: { type: String, required: true }
        }
    ]
});

const Quest = mongoose.model('Quest', questSchema);
