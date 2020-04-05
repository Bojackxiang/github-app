// 存放action 创建函数

import TYPES from "../types";
import DataStore from "../../expand/dao/DataStore";

// -> 获取最热数据
export default (storeName, url,) => {
  console.log(storeName, url);
  return async (dispatch) => {
    try {
      dispatch({
        type: TYPES.POPULAR_FRESH,
        payload: { storeName: storeName },
      });

      let dataStore = new DataStore();
      let response = await dataStore.fetchData(url);

      dispatch({
        type: TYPES.POPULAR_FRESH_SUCCESS,
        payload: {
          data: response.data.items,
          storeName: storeName,
        },
      });
    } catch (ex) {
      dispatch({ type: TYPES.POPULAR_FRESH_FAIL, error: ex.message });
    }
  };
};

