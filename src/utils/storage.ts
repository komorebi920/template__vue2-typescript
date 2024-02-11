const preId = process.env.VUE_APP_STORAGE_PRE_ID;
const timeSign = "|-DOOR-|";
const storage = localStorage || window.localStorage;

enum Status {
  Success = 0, // 成功
  Failure = 1, // 失败
  Timeout = 2, // 过期
}

interface Result {
  status: Status;
  key: string;
  value: string | number | null;
}

function getKey(key: string): string {
  return preId + key;
}

/**
 *  localStorage 操作类
 */
class Store {
  /**
   * 设置 storage
   * @param key
   * @param value
   * @param time 超时时间
   * @returns
   */
  public set(
    key: string,
    value: string | number,
    time?: Date | number
  ): Result {
    let status = Status.Success;
    try {
      time
        ? storage.setItem(
            getKey(key),
            (new Date(time).getTime() || (time as Date).getTime()) +
              timeSign +
              value
          )
        : storage.setItem(getKey(key), value.toString());
    } catch (e) {
      status = Status.Failure;
    }
    return { status, key: getKey(key), value };
  }

  /**
   * 获取 storage
   * @param key
   * @returns
   */
  public get(key: string): Result {
    const timeSignLen = timeSign.length;
    const result: Result = {
      status: Status.Success,
      key: getKey(key),
      value: null,
    };
    let index, time;
    try {
      result.value = storage.getItem(getKey(key));
    } catch (e) {
      result.status = Status.Failure;
      return result;
    }
    if (result.value) {
      index = result.value.indexOf(timeSign);
      time = +result.value.slice(0, index);
      if (time > new Date().getTime() || time == 0) {
        result.value = result.value.slice(index + timeSignLen);
      } else {
        result.value = null;
        result.status = Status.Timeout;
        this.remove(key);
      }
    } else {
      result.status = Status.Failure;
    }
    return result;
  }

  /**
   * 删除 storage，如果删除成功，返回删除的内容
   * @param key
   * @returns
   */
  public remove(key: string): Result {
    const result: Result = {
      status: Status.Success,
      key: getKey(key),
      value: null,
    };

    try {
      result.value = storage.getItem(getKey(key));
    } catch (e) {
      result.status = Status.Failure;
      return result;
    }
    if (result.value) {
      try {
        storage.removeItem(getKey(key));
      } catch (e) {
        result.status = Status.Failure;
        return result;
      }
    }
    return result;
  }
}

export default new Store();
