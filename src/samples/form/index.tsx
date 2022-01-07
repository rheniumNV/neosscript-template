import React from "react";
import Slot from "lib/core/Slot";
import { generateId } from "lib/core/util";
import Grabbable from "lib/core/components/Transform/Interaction/Grabbable";
import BoxCollider from "lib/core/components/Physics/Colliders/BoxCollider";
import BoxMesh from "lib/core/components/Assets/Procedural Meshes/BoxMesh";
import MeshRenderer from "lib/core/components/Rendering/MeshRenderer";
import ValueCopy_T from "lib/core/components/Transform/Drivers/ValueCopy_T";
import PBS_Metallic from "lib/core/components/Assets/Materials/PBS_Metallic";
import DynamicVariableSpace from "lib/core/components/Data/Dynamic/DynamicVariableSpace";
import DVSlot from "lib/dv/DVSlot";
import NeosType from "lib/core/types/NeosType";
import UIXCanvas from "lib/uixHelper/UIXCanvas";
import UIXVertical from "lib/uixHelper/UIXVertical";
import UIXElement from "lib/uixHelper/UIXElement";
import Text from "lib/core/components/UIX/Graphics/Text";
import TextField from "lib/core/components/UIX/Interaction/TextField";
import TextEditor from "lib/core/components/Common UI/Editors/TextEditor";
import Button from "lib/core/components/UIX/Interaction/Button";
import Image from "lib/core/components/UIX/Graphics/Image";
import UIXBackground from "lib/uixHelper/UIXBackground";
import { RelayManager } from "lib/util/RelayManager";

const UIXTextField = () => {
  const relay = new RelayManager();
  return (
    <UIXElement
      components={[
        <Image
          Tint={{ value: [0, 0, 0, 0], id: relay.setRefId("ImageColor") }}
        />,
        <Button
          BaseColor={[0.8, 0.8, 0.8, 1]}
          ColorDrivers={{
            ID: generateId(),
            Data: [
              {
                ID: generateId(),
                ColorDriver: {
                  ID: generateId(),
                  Data: relay.getRefId("ImageColor"),
                },
                TintColorMode: {
                  ID: generateId(),
                  Data: "Explicit",
                },
                NormalColor: {
                  ID: generateId(),
                  Data: [1.0, 1.0, 1.0, 1.0],
                },
                HighlightColor: {
                  ID: generateId(),
                  Data: [0.8, 0.8, 0.8, 1.0],
                },
                PressColor: {
                  ID: generateId(),
                  Data: [1.2, 1.2, 1.2, 1.0],
                },
                DisabledColor: {
                  ID: generateId(),
                  Data: [0.65, 0.65, 0.65, 1.0],
                },
              },
            ],
          }}
        />,
        <TextField
          Editor={relay.getRefId("TextEditorComponent")}
          __text={relay.getRefId("TextComponent")}
        />,
        <TextEditor
          id={relay.getRefId("TextEditorComponent")}
          Text={relay.getRefId("TextComponent")}
        />,
      ]}
    >
      <UIXElement
        components={[<Text id={relay.setRefId("TextComponent")} />]}
      />
    </UIXElement>
  );
};

export default () => {
  const ItemName = "CalenderForm";
  const rootSlotId = generateId();
  return (
    <Slot
      id={rootSlotId}
      name={ItemName}
      components={[
        <Grabbable Scalable={true} />,
        <DynamicVariableSpace SpaceName={ItemName} />,
      ]}
    >
      <Slot name="DV">
        <DVSlot
          name="Static"
          referenceVariables={[
            { type: NeosType.Slot, name: "Root", value: rootSlotId },
            { type: NeosType.Slot, name: "", value: rootSlotId },
          ]}
        />
        <DVSlot
          name="State"
          valueVariables={[
            { type: NeosType.Float, name: "StartTime", value: 100 },
            { type: NeosType.Color, name: "Main" },
          ]}
          referenceVariables={[
            { type: NeosType.Slot, name: "Root", value: rootSlotId },
          ]}
        />
        <DVSlot
          name="Input"
          valueVariables={[{ type: NeosType.String, name: "Input.EventName" }]}
        />
      </Slot>
      <UIXCanvas canvas={{ Size: [1000, 1500] }}>
        <UIXBackground />
        <UIXVertical
          templates={[
            [75, "Min"],
            [1, "Flexible"],
          ]}
        >
          <UIXElement components={[<Text Content={"Event Form"} />]} />
          <UIXVertical
            templates={[
              [70, "Min"],
              [70, "Min"],
              [70, "Min"],
              [70, "Min"],
            ]}
          >
            <UIXTextField />
            <UIXTextField />
            <UIXTextField />
            <UIXTextField />
          </UIXVertical>
        </UIXVertical>
      </UIXCanvas>
    </Slot>
  );
};
