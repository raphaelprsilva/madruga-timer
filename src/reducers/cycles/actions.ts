import { ICycle } from './reducer';

export enum CyclesActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

export function addNewCycleAction(newCycle: ICycle) {
  return {
    type: CyclesActionTypes.ADD_NEW_CYCLE,
    payload: { newCycle },
  };
}

export function markCurrentCycleAsFinishedAction(activeCycleId: string) {
  return {
    type: CyclesActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
    payload: {
      activeCycleId,
    },
  };
}

export function interruptCurrentCycleAction(activeCycleId: string) {
  return {
    type: CyclesActionTypes.INTERRUPT_CURRENT_CYCLE,
    payload: {
      data: {
        activeCycleId,
      },
    },
  };
}
