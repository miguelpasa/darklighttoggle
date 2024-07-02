
const DEFAULT_RANDOM_TO = 100;

const randomNumber = (from?: number, to?: number) => {
    if(!from && !to) {
        return Math.floor(Math.random() * DEFAULT_RANDOM_TO);
    }
    if(!from && to) {
        return Math.floor(Math.random() * to);
    }
    if(from && to) {
        return (Math.random() * (to - from)) + from;
    }
}

export default randomNumber;