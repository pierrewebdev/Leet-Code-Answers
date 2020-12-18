//example of this

const newFunct = () => {
    console.log(this)
    //result should be window object
}

const object = {
    newerFunct: () => console.log(this);
    //result should be object
    //actual result is the window object
}

function evenNewerFunct(){
    const newVariable = () => console.log(this);

    return newVariable;
    //result should be evenNewerFunct
    //result is still the window object here
}

const newestFunction = () => {
    return () => console.log;
    //result should be newestFunction
}

