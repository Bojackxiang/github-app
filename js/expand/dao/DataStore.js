import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";

export default class DataStore {
  saveData(url, data, callback) {
    if (!url || !data) return;
    AsyncStorage.setItem(url, JSON.stringify(this.wrapData(data)), callback);
  }

  // -> 封装数据，让每个数据都有一个时间戳
  wrapData(data) {
    return { data: data, timeStamp: new Date().getTime() };
  }

  // 内部使用
  async fetchLocalData(url) {
    try {
      let localData = await AsyncStorage.getItem(url);
      return localData      
    } catch (error) {
      return error
    }
  }

  async fetchNetData(url) {
    try {
      let responseData = axios.get(url);
      console.log(responseData);
      return responseData;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async fetchData(url,) {
    try {
      // 尝试获取本地的数据
      // let data = await this.fetchLocalData(url)
      let data = this.fetchNetData(url)
      // if(!data) {
      //   data = await this.wrapData(this.fetchNetData(url))
      //   await this.saveData(data)
      // }
      return data
    } catch (error) {
      return error
    }
  }

  checkTimeValidate(timeStamp) {
    const currentDate = new Date();
    const targetDate = new Date();
    targetDate.setTime(timeStamp);
    if (currentDate.getMonth() !== targetDate.getMonth()) return false;
    if (currentDate.getDate() !== targetDate.getDate()) return false;
    if (currentDate.getHours - targetDate.getHours > 4) return false; // -> 本地数据四小时之内国旗
    return true;
  }
}
