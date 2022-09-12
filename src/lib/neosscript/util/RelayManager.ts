import { generateId } from "lib/neosscript/util";
import _ from "lodash";

type Ref = { id: string; getCount: number; setCount: number };
export class RelayManager {
  refMap: { [name: string]: Ref };
  constructor() {
    this.refMap = {};
  }

  public setRef(key: string): {
    ref: Ref;
    set: true;
  } {
    const ref = _.get(this.refMap, key);
    if (!ref) {
      const newRef = { id: generateId(), setCount: 1, getCount: 0 };
      this.refMap = {
        ...this.refMap,
        ...{ [key]: newRef },
      };
      return { ref: newRef, set: true };
    }
    const { setCount } = ref;
    if (setCount > 0) {
      //throw new Error();
    }
    this.refMap = {
      ...this.refMap,
      ...{ [key]: { ...ref, ...{ setCount: setCount + 1 } } },
    };

    return { ref, set: true };
  }

  public getRefId(key) {
    return this.getRef(key).ref.id;
  }

  public setRefId(key) {
    return this.setRef(key).ref.id;
  }

  public getRef(key: string): {
    ref: Ref;
    get: true;
  } {
    const ref = _.get(this.refMap, key);
    if (!ref) {
      const newRef = { id: generateId(), setCount: 0, getCount: 1 };
      this.refMap = {
        ...this.refMap,
        ...{ [key]: newRef },
      };
      return { ref: newRef, get: true };
    }
    const { getCount } = ref;
    this.refMap = {
      ...this.refMap,
      ...{ [key]: { ...ref, ...{ getCount: getCount + 1 } } },
    };
    return { ref, get: true };
  }
}
