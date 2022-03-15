function ulcase (action, input){
    if (action == "lowercase"){
        const output = input.toLowerCase();
        return output;
}   else {
        const output = input.toUppercase();
        return output;
}
}

export default ulcase;