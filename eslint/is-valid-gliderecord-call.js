"use strict";

const path = require("path");

// Define the functions that need to be checked
const GR_CHECK_FNS = ["insert", "update", "get", "deleteRecord", "next", "_next"];

// Variables that represent instances of GlideRecord
let grVars;

// Define message ID and message content
const messageId = path.basename(__filename).replace(/[.]js$/, "") + "_msg";
const message = "Check return values of GlideRecord insert, update, get, next, deleteRecord calls. This can detect many common runtime problems.";

// Function to check if a new GlideRecord instance is being created
const checkInstantiator = (astId, newExpr) => {
    if (astId.type === "Identifier" && newExpr.callee !== undefined && newExpr.callee.type === "Identifier" && newExpr.callee.name === "GlideRecord") {
        grVars.push(astId.name);
    }
};

const rule = {
    meta: {
        type: "problem",
        docs: {
            description: "Require checking GlideRecord insert, update, get, next, deleteRecord return values.",
            category: "Possible Problems",
        },
        messages: {
            [messageId]: message
        }
    },

    create: context => {
        grVars = ["current", "previous"]; // Start with predefined GlideRecord variables
        return {
            CallExpression: node => {
                if (node.callee && node.callee.object && node.callee.property && grVars.includes(node.callee.object.name) && GR_CHECK_FNS.includes(node.callee.property.name)) {
                    // Check if the parent of the CallExpression is an ExpressionStatement. If so, report an error
                    if (node.parent.type === "ExpressionStatement" && ["Program", "BlockStatement"].includes(node.parent.parent.type)) {
                        context.report({ node, messageId });
                    }
                }
            },
            VariableDeclarator: node => {
                // Check if a new GlideRecord instance is being created and add it to the list
                if (node.id && node.init && node.init.type === "NewExpression") {
                    checkInstantiator(node.id, node.init);
                }
            },
            AssignmentExpression: node => {
                // Check if a new GlideRecord instance is being created and add it to the list
                if (node.left && node.right && node.right.type === "NewExpression") {
                    checkInstantiator(node.left, node.right);
                }
            }
        };
    }
};

module.exports = rule;
