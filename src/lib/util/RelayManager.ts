import _ from "lodash";

export class RelayManager {
  refMap: {};
  constructor() {
    this.refMap = {};
  }

  public connect(key: string) {
    const value = _.get(this.refMap, key);
    if (!value) {
    }
    return value;
  }

  public getRef(key: string) {
    return _.get(this.refMap, key);
  }
}
