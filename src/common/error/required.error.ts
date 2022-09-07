export default (errorMissingValue: unknown) => {
    throw new TypeError(`${errorMissingValue} is required but was not provided.`) 
}