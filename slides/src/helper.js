/*
 * replaces comments like `//${funcName}` with `const funcName = func`
 * so that I don't have to copy the helper functions into every stepDefinition
 * but they can still be included in the <script> for source code inspection
 */
const replaceHelperFunctionComments = (fun, helperFunctions) => {
    let functionString = fun.toString();
    const helperFunctionNames = Object.keys(helperFunctions);
    helperFunctionNames.forEach(helperFunctionName => {
        const helperFunction = helperFunctions[helperFunctionName];
        const helperFunctionString = helperFunction.toString().replaceAll("\n  ", "\n    ");
        functionString = functionString.replace(`//\${${helperFunctionName}}`, `const ${helperFunctionName} = ${helperFunctionString};\n`);
    });

    return eval(functionString);
};

export {
    replaceHelperFunctionComments,
};
