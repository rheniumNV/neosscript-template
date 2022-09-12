import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface TutorialItemPartInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Tags?: member<any>;
  LabelPointReference?: member<any>;
  LabelContentReference?: member<any>;
  _currentLabelContent?: member<any>;
  _currentLabelMesh?: member<any>;
}

const TutorialItemPart: FC<TutorialItemPartInput> = (
  props: TutorialItemPartInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Tags,
    LabelPointReference,
    LabelContentReference,
    _currentLabelContent,
    _currentLabelMesh,
  } = props;

  return (
    <component
      name="FrooxEngine.TutorialItemPart"
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
        type={`FrooxEngine.SyncFieldList\`1[System.String]`}
        name="Tags"
        content={Tags} /* default: FrooxEngine.SyncFieldList`1[System.String] */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`}
        name="LabelPointReference"
        content={LabelPointReference} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`}
        name="LabelContentReference"
        content={LabelContentReference} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`}
        name="_currentLabelContent"
        content={_currentLabelContent} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`}
        name="_currentLabelMesh"
        content={_currentLabelMesh} /* default: ID0 */
      />
    </component>
  );
};

export default TutorialItemPart;
