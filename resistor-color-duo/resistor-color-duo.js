import { COLORS } from '../resistor-color/resistor-color';

export const decodedValue = (colorDuo) => {
    return 10 * COLORS.indexOf(colorDuo[0]) + COLORS.indexOf(colorDuo[1]);
};
