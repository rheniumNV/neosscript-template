import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface TutorialItemInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Show?: member<boolean>;
  HideAngle?: member<number>;
  NormalMaterial?: member<any>;
  _highlightMaterials?: member<any>;
  _normalColor?: member<any>;
  _hueOffset?: member<number>;
  ShowLerp?: member<any>;
  TextColor?: member<any>;
}

const TutorialItem: FC<TutorialItemInput> = (props: TutorialItemInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Show,
    HideAngle,
    NormalMaterial,
    _highlightMaterials,
    _normalColor,
    _hueOffset,
    ShowLerp,
    TextColor,
  } = props;

  return (
    <component
      name="FrooxEngine.TutorialItem"
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
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Show"
        content={Show} /* default: False */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="HideAngle"
        content={HideAngle} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.FresnelMaterial]`}
        name="NormalMaterial"
        content={NormalMaterial} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncList\`1[FrooxEngine.TutorialItem+HighlightMaterial]`}
        name="_highlightMaterials"
        content={
          _highlightMaterials
        } /* default: FrooxEngine.SyncList`1[FrooxEngine.TutorialItem+HighlightMaterial] */
      />
      <Member
        type={`FrooxEngine.FieldDrive\`1[BaseX.color]`}
        name="_normalColor"
        content={_normalColor} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="_hueOffset"
        content={_hueOffset} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Single]`}
        name="ShowLerp"
        content={ShowLerp} /* default: FrooxEngine.RawOutput`1[System.Single] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[BaseX.color]`}
        name="TextColor"
        content={TextColor} /* default: FrooxEngine.RawOutput`1[BaseX.color] */
      />
    </component>
  );
};

export default TutorialItem;
