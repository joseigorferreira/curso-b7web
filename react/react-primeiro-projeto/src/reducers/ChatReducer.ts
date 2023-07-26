import { Message } from '@/types/Message'

type AddAction = {
    type: 'add';
    payload: {
        user: string;
        text: string;
    };
}

type ListActions = AddAction

export const chatReducer = (list: Message[], action: ListActions) => {
    switch (action.type) {
        case 'add':
            return [...list, {
                id: list.length+1,
                text: action.payload.text,
                user: action.payload.user
            }]
        default:
            return list;
    }
}