import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface VisemeAnalyzerInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  Source?: member<any>;
  RemoteSource?: member<any>;
  Smoothing?: member<number>;
  Silence?: member<any>;
  PP?: member<any>;
  FF?: member<any>;
  TH?: member<any>;
  DD?: member<any>;
  kk?: member<any>;
  CH?: member<any>;
  SS?: member<any>;
  nn?: member<any>;
  RR?: member<any>;
  aa?: member<any>;
  E?: member<any>;
  ih?: member<any>;
  oh?: member<any>;
  ou?: member<any>;
  LaughterProbability?: member<any>;
}

const VisemeAnalyzer: FC<VisemeAnalyzerInput> = (
  props: VisemeAnalyzerInput
) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    Source,
    RemoteSource,
    Smoothing,
    Silence,
    PP,
    FF,
    TH,
    DD,
    kk,
    CH,
    SS,
    nn,
    RR,
    aa,
    E,
    ih,
    oh,
    ou,
    LaughterProbability,
  } = props;

  return (
    <component
      name="FrooxEngine.VisemeAnalyzer"
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
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.IAudioSource]`}
        name="Source"
        content={Source} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.SyncRef\`1[FrooxEngine.MultiValueStream\`1[System.Single]]`}
        name="RemoteSource"
        content={RemoteSource} /* default: ID0 */
      />
      <Member
        type={`FrooxEngine.Sync\`1[System.Single]`}
        name="Smoothing"
        content={Smoothing} /* default: 0 */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Single]`}
        name="Silence"
        content={Silence} /* default: FrooxEngine.RawOutput`1[System.Single] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Single]`}
        name="PP"
        content={PP} /* default: FrooxEngine.RawOutput`1[System.Single] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Single]`}
        name="FF"
        content={FF} /* default: FrooxEngine.RawOutput`1[System.Single] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Single]`}
        name="TH"
        content={TH} /* default: FrooxEngine.RawOutput`1[System.Single] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Single]`}
        name="DD"
        content={DD} /* default: FrooxEngine.RawOutput`1[System.Single] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Single]`}
        name="kk"
        content={kk} /* default: FrooxEngine.RawOutput`1[System.Single] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Single]`}
        name="CH"
        content={CH} /* default: FrooxEngine.RawOutput`1[System.Single] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Single]`}
        name="SS"
        content={SS} /* default: FrooxEngine.RawOutput`1[System.Single] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Single]`}
        name="nn"
        content={nn} /* default: FrooxEngine.RawOutput`1[System.Single] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Single]`}
        name="RR"
        content={RR} /* default: FrooxEngine.RawOutput`1[System.Single] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Single]`}
        name="aa"
        content={aa} /* default: FrooxEngine.RawOutput`1[System.Single] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Single]`}
        name="E"
        content={E} /* default: FrooxEngine.RawOutput`1[System.Single] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Single]`}
        name="ih"
        content={ih} /* default: FrooxEngine.RawOutput`1[System.Single] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Single]`}
        name="oh"
        content={oh} /* default: FrooxEngine.RawOutput`1[System.Single] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Single]`}
        name="ou"
        content={ou} /* default: FrooxEngine.RawOutput`1[System.Single] */
      />
      <Member
        type={`FrooxEngine.RawOutput\`1[System.Single]`}
        name="LaughterProbability"
        content={
          LaughterProbability
        } /* default: FrooxEngine.RawOutput`1[System.Single] */
      />
    </component>
  );
};

export default VisemeAnalyzer;
