import React, { FC } from "react";
import { member, Member } from "../../Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface NestedCanvasInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
  TargetCanvas?: member<any>;
  _renderOffset?: member<any>;
  _maskDepth?: member<any>;
}

const NestedCanvas: FC<NestedCanvasInput> = (props: NestedCanvasInput) => {
  const {
    id,
    persistentId,
    UpdateOrder,
    Enabled,
    TargetCanvas,
    _renderOffset,
    _maskDepth,
  } = props;

  return (
    <component
      name="FrooxEngine.NestedCanvas"
      id={id}
      persistentId={persistentId}
    >
      <Member
        type="FrooxEngine.Sync`1[System.Int32]"
        name="UpdateOrder"
        content={UpdateOrder}
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="Enabled"
        content={Enabled}
      />
      <Member
        type="FrooxEngine.SyncRef`1[FrooxEngine.UIX.Canvas]"
        name="TargetCanvas"
        content={TargetCanvas}
      />
      <Member
        type="FrooxEngine.FieldDrive`1[System.Int32]"
        name="_renderOffset"
        content={_renderOffset}
      />
      <Member
        type="FrooxEngine.FieldDrive`1[System.Int32]"
        name="_maskDepth"
        content={_maskDepth}
      />
    </component>
  );
};

export default NestedCanvas;
