import { colorCode } from '../resistor-color/resistor-color';

export const decodedValue = (colorDuo) => {
    let [first, second] = colorDuo.slice(0, 2).map((c) => colorCode(c));
    return 10 * first + second;
};
