export default (errorMissingValue: unknown) => {
    throw new TypeError(`Expected ${errorMissingValue} environment variable to be defined.`) 
}