// no-current-update.js
const fs = require('fs');
const path = require('path');

module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Don't call current.update in Business Rule scriptlets",
            category: "Best Practices",
            recommended: true
        },
        messages: {
            avoidCurrentUpdate: "Don't call current.update in BR scriptlets. It can cause unintended behavior and performance issues.",
            metadataNotFound: "Metadata has not been provided.",
            tableNotFound: "Metadata has been provided but table name has not been found or is different than sys_script - (it is not Business Rule)."
        }
    },

    create: function(context) {
        const filename = context.getFilename();
        const metadataFilename = process.env.ESLINT_METADATA_PATH;
        let shouldLintFile = false;
        let messageKey = '';

        if (fs.existsSync(metadataFilename)) {
            const metadata = JSON.parse(fs.readFileSync(metadataFilename, 'utf8'));
            const key = Object.keys(metadata)[0]; // first key in the object
            const sysScript = metadata[key]?.record_update?.sys_script;
            const table = metadata[key]?.record_update?.table;

            if (table && table === 'sys_script' && sysScript?.when === 'after') {
                shouldLintFile = true;
            } else {
                messageKey = 'tableNotFound';
            }
        } else {
            messageKey = 'metadataNotFound';
        }

        return {
            Program(node) {
                if (messageKey) {
                    context.report({
                        node: node,
                        messageId: messageKey
                    });
                }
            },
            MemberExpression(node) {
                if (shouldLintFile && node.object.name === 'current' && node.property.name === 'update') {
                    context.report({
                        node: node,
                        messageId: 'avoidCurrentUpdate'
                    });
                }
            }
        };
    }
};
