/* eslint-disable */
import { PRYProp } from "./css-atoms";
import type * as CSS from 'csstype';

/**
 * PRY
 * Function for dynamically creating and auto-completing
 * PRY design system files.
 * @param {DSysProp} dsysStyles
 * @param {Object} CSS.Properties
 * @return {CSS.Properties}
 */
export default function pry(
  dsysStyles: PRYProp,
  otherStyles: CSS.Properties = {},
) : CSS.Properties {
  const dsysStylesObj: {[key:`--PRY-${string}`]: string} = {};
  Object.entries(dsysStyles).map((entry) => {
    if (entry[1] === true) {
      dsysStylesObj[`--pry-${entry[0]}`] = '1';
    }else{
      dsysStylesObj[`--pry-${entry[0]}`] = `var( --pry-${entry[1]} )`;
    }
  });
  return {
    ...dsysStylesObj,
    ...otherStyles,
  };
}
