export type Type = "set";

export interface AudienceActions {
    type: Type;
    payload: {
        prop: string;
    };
}

export interface AudienceState {
    
}

export const AudienceReducer = (state: AudienceState, action: AudienceActions) => {
    switch (action.type) {
        case action.type:
            return {
                ...state,
                [action.payload.prop]: []
            }
    }
}