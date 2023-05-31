// custom-rules.js
module.exports = {
  "sn_eslint_custom_rule": {
    create: function(context) {
      let glideRecord = false;
      let addEncodedQueryCalled = false;
      let isValidEncodedQueryCalled = false;

      return {
        Identifier(node) {
          if (node.name === "GlideRecord") {
            glideRecord = true;
          }
          if (glideRecord && node.name === "addEncodedQuery") {
            addEncodedQueryCalled = true;
          }
          if (glideRecord && node.name === "isValidEncodedQuery") {
            isValidEncodedQueryCalled = true;
          }
          if (glideRecord && node.name === "query" && addEncodedQueryCalled && !isValidEncodedQueryCalled) {
            context.report({
              node,
              message: "Ensure isValidEncodedQuery is called after addEncodedQuery and before query."
            });
          }
        },
        "CallExpression:exit": function(node) {
          if (node.callee.name === "query") {
            addEncodedQueryCalled = false;
            isValidEncodedQueryCalled = false;
          }
        }
      };
    }
  }
};
