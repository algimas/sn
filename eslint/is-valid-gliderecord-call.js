"use strict";

const path = require("path");

const GR_CHECK_FNS = ["insert", "update", "get", "deleteRecord", "next", "_next"];
let grVars;

const messageId = path.basename(__filename).replace(/[.]js$/, "") + "_msg";
const message = "Check return values of GlideRecord insert, update, get, next, deleteRecord calls. This can detect many common runtime problems.";

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
        console.log(`START of is-valid-gliderecord-call.js`);
        grVars = ["current", "previous"];
        return {
            CallExpression: node => {
                if (node.callee && node.callee.object && node.callee.property && grVars.includes(node.callee.object.name) && GR_CHECK_FNS.includes(node.callee.property.name)) {
                    if (node.parent.type === "ExpressionStatement" && ["Program", "BlockStatement"].includes(node.parent.parent.type)) {
                        context.report({ node, messageId });
                        console.log(`Issue found in file: ${context.getFilename()}`);
                    }
                }
            },
            VariableDeclarator: node => {
                if (node.id && node.init && node.init.type === "NewExpression") {
                    checkInstantiator(node.id, node.init);
                }
            },
            AssignmentExpression: node => {
                if (node.left && node.right && node.right.type === "NewExpression") {
                    checkInstantiator(node.left, node.right);
                }
            },
            "Program:exit": () => {
                console.log(`Finished checking file: ${context.getFilename()}`);
            }
        };
    }
};

module.exports = rule;
