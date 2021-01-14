unitTranslate.hasUnits = (name) => {
    return  dictionary.some(({origin, replace}) => {
        const regexpStr = (^|[\\\\s,.])+(${origin}|${replace})([\\\\s,.]|$)+;
        const regexp = new RegExp(regexpStr);
        return regexp.test(name);
    });
};
