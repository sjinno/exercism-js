import { colorCode } from '../resistor-color/resistor-color';

export const decodedValue = (colorDuo) => {
    return parseInt(
        colorDuo
            .slice(0, 2)
            .map((c) => colorCode(c))
            .join('')
    );
};
