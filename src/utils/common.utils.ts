/**
 * Get the value if exist of throw an error
 * @param value
 */
export const getOrThrow = <T>(value: T | null | undefined): T => {
    if (!value) {
        throw new Error();
    }
    return value;
};
