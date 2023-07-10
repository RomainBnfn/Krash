/**
 * Generate boostrap values.
 * @param property
 * @param xs
 * @param xl
 */
export const generateBootstrapResponsiveValues = (
    property: string,
    xs: number,
    xl: number,
): string => {
    const bsSizes = ["", "sm", "md", "lg", "xl"];
    return bsSizes
        .map((size, i) => {
            const classSize = size && `-${size}`;
            const value = Math.round(
                xs + (i / (bsSizes.length - 1)) * (xl - xs),
            );
            return `${property}${classSize}-${value}`;
        })
        .join(" ");
};
