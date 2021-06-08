/*
 * @Author: Stevie
 * @Date: 2021-06-06 21:46:07
 * @LastEditTime: 2021-06-09 00:12:04
 * @LastEditors: Stevie
 * @Description:
 */
import { CalculatorActionTypes as types } from '../action-types';

// - 同步action: action对象为普通对象
const CalculatorActions = {
  add: (data: any) => ({ type: types.ADD, data }),
  subtract: (data: any) => ({ type: types.SUBTRACT, data }),
  multiply: (data: any) => ({ type: types.MULTIPLY, data }),
  divide: (data: any) => ({ type: types.DIVIDE, data }),
  reset: (data: any) => ({ type: types.RESET, data })
};

// - 异步action: action对象为函数
export const CalculatorAsyncActions = {
  resetAfterOneSecond: (data: any, timeout: number) => {
    return (dispatch) => {
      setTimeout(() => {
        dispatch(CalculatorActions.reset(data))
      }, timeout);
    }
  }
}

export default CalculatorActions;
