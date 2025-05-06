
const createStore = (createState) => {

    let state;
    let getState = () => state;
    let setState = () => {};
    const subscript = () => {};
    state = createState(setState);
}