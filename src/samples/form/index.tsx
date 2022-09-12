import React from "react";
import Slot from "lib/neosscript/core/Slot";
import { generateId } from "lib/neosscript/util";
import Grabbable from "lib/neosscript/core/components/Transform/Interaction/Grabbable";
import BoxCollider from "lib/neosscript/core/components/Physics/Colliders/BoxCollider";
import BoxMesh from "lib/neosscript/core/components/Assets/Procedural Meshes/BoxMesh";
import MeshRenderer from "lib/neosscript/core/components/Rendering/MeshRenderer";
import ValueCopy_T from "lib/neosscript/core/components/Transform/Drivers/ValueCopy_T";
import PBS_Metallic from "lib/neosscript/core/components/Assets/Materials/PBS_Metallic";
import DynamicVariableSpace from "lib/neosscript/core/components/Data/Dynamic/DynamicVariableSpace";
import DVSlot from "lib/dv/DVSlot";
import NeosType from "lib/neosscript/core/types/NeosType";
import UIXCanvas from "lib/uixHelper/UIXCanvas";
import UIXVertical from "lib/uixHelper/UIXVertical";
import UIXElement from "lib/uixHelper/UIXElement";
import Text from "lib/neosscript/core/components/UIX/Graphics/Text";
import TextField from "lib/neosscript/core/components/UIX/Interaction/TextField";
import TextEditor from "lib/neosscript/core/components/Common UI/Editors/TextEditor";
import Button from "lib/neosscript/core/components/UIX/Interaction/Button";
import Image from "lib/neosscript/core/components/UIX/Graphics/Image";
import UIXBackground from "lib/uixHelper/UIXBackground";
import { RelayManager } from "lib/neosscript/util/RelayManager";
import { CommonTexture, useTexture } from "lib/uixHelper/AssetUtil";
import UIXHorizontal from "lib/uixHelper/UIXHorizontal";
import VerticalLayout from "lib/neosscript/core/components/UIX/Layout/VerticalLayout";
import UI_TextUnlitMaterial from "lib/neosscript/core/components/Assets/Materials/UI/Text/UI_TextUnlitMaterial";

const UIXTextField = () => {
  const relay = new RelayManager();
  const { spriteId, assets } = useTexture({
    texture: CommonTexture.Circle,
    sprite: { Borders: [0.33, 0.33, 0.33, 0.33], Scale: 0.05 },
  });
  return (
    <UIXElement
      components={[
        <Image
          Tint={{ value: [0, 0, 0, 0], id: relay.setRefId("ImageColor") }}
          Sprite={spriteId}
        />,
        <Button
          BaseColor={[0.8, 0.8, 0.8, 1]}
          ColorDrivers={[
            {
              ID: generateId(),
              ColorDrive: {
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
          ]}
        />,
        <TextField
          Editor={relay.getRefId("TextEditorComponent")}
          __text={relay.getRefId("TextComponent")}
        />,
        <TextEditor
          id={relay.getRefId("TextEditorComponent")}
          Text={relay.getRefId("TextComponent")}
        />,
        <VerticalLayout
          PaddingBottom={5}
          PaddingLeft={5}
          PaddingRight={5}
          PaddingTop={5}
        />,
        ...assets,
      ]}
    >
      <UIXElement
        components={[
          <Text
            id={relay.setRefId("TextComponent")}
            HorizontalAlign={"Center"}
            VerticalAlign={"Middle"}
            HorizontalAutoSize={true}
            VerticalAutoSize={true}
          />,
        ]}
      />
    </UIXElement>
  );
};

const FiledArea = ({ title }: { title: string }) => {
  return (
    <UIXHorizontal
      layout={{
        Spacing: 10,
      }}
      templates={[
        [100, "Min"],
        [1, "Flexible"],
      ]}
    >
      <UIXElement
        components={[
          <Text
            Content={title}
            VerticalAlign={"Middle"}
            HorizontalAlign={"Center"}
          />,
        ]}
      />
      <UIXTextField />
    </UIXHorizontal>
  );
};

export default () => {
  const ItemName = "CalenderForm";
  const rootSlotId = generateId();
  const relay = new RelayManager();

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
          layout={{
            PaddingTop: 10,
            PaddingBottom: 10,
            PaddingLeft: 10,
            PaddingRight: 10,
            Spacing: 10,
          }}
        >
          <UIXElement
            components={[
              <Text
                Content={"Event Form"}
                VerticalAlign={"Middle"}
                HorizontalAlign={"Center"}
                Materials={[
                  {
                    ID: generateId(),
                    Data: relay.getRefId("UI_TextUnlitMaterial"),
                  },
                ]}
              />,
              <UI_TextUnlitMaterial
                id={relay.setRefId("UI_TextUnlitMaterial")}
              />,
            ]}
          />
          <UIXVertical
            templates={[
              [70, "Min"],
              [70, "Min"],
              [70, "Min"],
              [70, "Min"],
            ]}
            layout={{
              Spacing: 10,
              ForceExpandHeight: false,
              VerticalAlign: "Top",
            }}
          >
            <FiledArea title="Title" />
            <FiledArea title="Detail" />
          </UIXVertical>
        </UIXVertical>
      </UIXCanvas>
    </Slot>
  );
};
