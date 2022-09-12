import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface GetAsset_AInput {
  type: { A: { name: string } };
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  _activeVisual?: member<any>;
  Provider?: member<any>;
}

const GetAsset_A: FC<GetAsset_AInput> = (props: GetAsset_AInput) => {
  const {
    type: {
      A: { name: A },
    },
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    _activeVisual,
    Provider,
  } = props;

  return (
    <component
      name={`FrooxEngine.LogiX.Assets.GetAsset\`1[${[A]}]`}
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
        type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`}
        name="_activeVisual"
        content={_activeVisual} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.IAssetProvider\`1[A]]`}
        name="Provider"
        content={Provider} /* default: null */
      />
    </component>
  );
};

export default GetAsset_A;
