// no-current-update.js
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
};
