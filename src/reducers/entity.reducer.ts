import { Entity } from "../modals/Entity";

export interface EntityState<T extends Entity = Entity> {
  byId: {
    [id: number]: T;
  };
  selectedId?: number;
  loadingList: boolean;
  loadingOne: boolean;
  errorOne?: string;
}

export const initialEntityState = {
  byId: {},
  loadingList: false,
  loadingOne: false,
};

export const select = (state: EntityState, id: number) => {
  return { ...state, selectedId: id, loadingOne: true , errorOne : undefined};
};


export const setErrorForOne = (state : EntityState, id : number , msg : string) => {
   if(state.selectedId !== id) {
     return state;
   } 
   return {...state,errorOne : msg,loadingOne:false}
}

export const getIds = (entities: Entity[]) => {
  return entities.map((e) => e.id);
};

export const addOne = (state: EntityState<Entity>, entity: Entity ,loading ? :boolean) => {

  const loader = loading === undefined ? state.loadingOne : loading;
  return { ...state, byId: { ...state.byId, [entity.id]: entity }, loadingOne : loader, };
};

export const addMany = (state: EntityState, entities: Entity[]) => {
  if (entities.length === 0) {
    return state;
  }
  const entityMap = entities.reduce((prev, entity) => {
    return { ...prev, [entity.id]: entity };
  }, {});
  return {
    ...state,
    byId: { ...state.byId, ...entityMap },
  };
};
