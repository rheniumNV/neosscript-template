import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface NeosVersionInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  VersionNumber?: member<any>;
  VersionName?: member<any>;
  FullVersionString?: member<any>;
  BuildYear?: member<any>;
  BuildMonth?: member<any>;
  BuildDay?: member<any>;
  BuildTimeOfDay?: member<any>;
}

const NeosVersion: FC<NeosVersionInput> = (props: NeosVersionInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    VersionNumber,
    VersionName,
    FullVersionString,
    BuildYear,
    BuildMonth,
    BuildDay,
    BuildTimeOfDay,
  } = props;

  return (
    <component
      name="FrooxEngine.NeosVersion"
      id={id}
      persistentId={persistentId}
      updateOrderId={updateOrderId}
      updateOrder={updateOrder}
    >
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Enabled"
        content={Enabled} /* default: False */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.String]`}
        name="VersionNumber"
        content={
          VersionNumber
        } /* default: FrooxEngine.RawOutput`1[System.String] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.String]`}
        name="VersionName"
        content={
          VersionName
        } /* default: FrooxEngine.RawOutput`1[System.String] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.String]`}
        name="FullVersionString"
        content={
          FullVersionString
        } /* default: FrooxEngine.RawOutput`1[System.String] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Int32]`}
        name="BuildYear"
        content={BuildYear} /* default: FrooxEngine.RawOutput`1[System.Int32] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Int32]`}
        name="BuildMonth"
        content={
          BuildMonth
        } /* default: FrooxEngine.RawOutput`1[System.Int32] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Int32]`}
        name="BuildDay"
        content={BuildDay} /* default: FrooxEngine.RawOutput`1[System.Int32] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Int32]`}
        name="BuildTimeOfDay"
        content={
          BuildTimeOfDay
        } /* default: FrooxEngine.RawOutput`1[System.Int32] */
      />
    </component>
  );
};

export default NeosVersion;
