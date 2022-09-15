import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface AttachAudioClipInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  _activeVisual?: member<any>;
  URL?: member<any>;
  Target?: member<any>;
  GetExisting?: member<any>;
  OnAttached?: member<any>;
}

const AttachAudioClip: FC<AttachAudioClipInput> = (
  props: AttachAudioClipInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    _activeVisual,
    URL,
    Target,
    GetExisting,
    OnAttached,
  } = props;

  return (
    <component
      name="FrooxEngine.LogiX.Assets.AttachAudioClip"
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
        type={`FrooxEngine.LogiX.Input\`1[System.Uri]`}
        name="URL"
        content={URL} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`}
        name="Target"
        content={Target} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`}
        name="GetExisting"
        content={GetExisting} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.LogiX.Impulse`}
        name="OnAttached"
        content={OnAttached} /* default: FrooxEngine.WorldDelegate */
      />
    </component>
  );
};

export default AttachAudioClip;
