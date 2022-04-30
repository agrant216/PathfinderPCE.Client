import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Modifer } from "src/app/models/modifier.model";

interface ModifierState extends EntityState<Modifer> {}

export const adapter: EntityAdapter<Modifer> = createEntityAdapter<Modifer>({
    selectId: modifier => modifier.id,
    sortComparer: (a,b) => a.id.localeCompare(b.id)
});

export const initialState: ModifierState = adapter.getInitialState({});
