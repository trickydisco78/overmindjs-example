import { Overmind } from "overmind";
import { createHook } from "overmind-react";
import { state } from "./state";
import * as actions from "./actions";
import * as effects from "./effects";

const config = {
  state,
  actions,
  effects
};

const overmind = new Overmind(config);

export const useOvermind = createHook(overmind);
