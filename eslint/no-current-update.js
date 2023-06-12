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
            avoidCurrentUpdate: "Don't call current.update in BR scriptlets. It can cause unintended behavior and performance issues."
        }
    },

    create: function(context) {
        // Get the filename of the .js file being linted
        const filename = context.getFilename();
        // Replace the .js extension with .json to get the path of the metadata file
        const metadataFilename = filename.replace(/\.js$/, '.json');

        // Read the metadata file
        const metadataRaw = fs.readFileSync(metadataFilename, 'utf-8');
        const metadata = JSON.parse(metadataRaw);

        // Check the metadata to determine whether to apply the rule
        const eslintMetadata = metadata[Object.keys(metadata)[0]]["record_update"]["sys_script"];
        const sysClassName = eslintMetadata["sys_class_name"];
        
        // Only apply the rule if the sys_class_name is 'sys_script'
        if (sysClassName === 'sys_script') {
            return {
                MemberExpression(node) {
                    if (node.object.name === 'current' && node.property.name === 'update') {
                        context.report({
                            node: node,
                            messageId: 'avoidCurrentUpdate'
                        });
                    }
                }
            };
        }
    }
};
