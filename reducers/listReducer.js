import Immutable from 'immutable'
import uuid from 'short-uuid';
import moment from 'moment';

const listReducer = (state: Immutable.List = initState, action) => {
  let listIndex: number;
  let elementIndex: number;

  switch(action.type) {
    case 'ADD_LIST':
      return state.push(
        Immutable.Map({
          id: uuid().new(),
          ownerId: action.ownerId,
          name: action.response.name,
          description: action.response.description,
          dueDate: action.response.dueDate,
          isActive: true,
          items: new Immutable.List(),
          contributors: new Immutable.List(),
        })
      );
    case 'ADD_ELEMENT':
       listIndex = state.findIndex((list) => list.get('id') === action.listId);
      return state.setIn([listIndex, 'items'], state.getIn([listIndex, 'items']).push(new Immutable.Map({
        id: uuid().new(),
        name: action.response.name,
        description: action.response.description,
        placeToBuy: action.response.placeToBuy,
        reservedById: null,
      })));
    case 'REMOVE_ELEMENT':
      listIndex = state.findIndex((list) => list.get('id') === action.listId);
       elementIndex = state.getIn([listIndex, 'items']).findIndex((element) => element.get('id') === action.elementId);
      return state.deleteIn([listIndex, 'items', elementIndex]);
    case 'ADD_CONTRIBUTOR':
       listIndex = state.findIndex((list) => list.get('id') === action.listId);
      return state.setIn([listIndex, 'contributors'], state.getIn([listIndex, 'contributors']).push(action.contributorId));
    case 'REMOVE_CONTRIBUTOR':
      listIndex = state.findIndex((list) => list.get('id') === action.listId);
      const contributorIndex: number = state.getIn([listIndex, 'contributors']).findIndex((conributor) => conributor === action.contributorId);
      return state.deleteIn([listIndex, 'contributors', contributorIndex]);
    case 'CHANGE_RESERVED_BY_VALUE':
      listIndex = state.findIndex((list) => list.get('id') === action.listId);
      elementIndex = state.getIn([listIndex, 'items']).findIndex((element) => element.get('id') === action.elementId);
      return state.setIn([listIndex, 'items', elementIndex, 'reservedById'], action.response);
    default:
      return state;
  }
}

export default listReducer;

const initState = Immutable.List([
  Immutable.Map({
    id: uuid().new(),
    ownerId: 1,
    name: 'Example list for test application',
    description: 'Example list description',
    dueDate: moment('12.05.2020', 'DD.MM.YYYY'),
    isActive: true,
    items: new Immutable.List([
      Immutable.Map({
        id: uuid().new(),
        name: 'Element1 name',
        description: 'Element1 description',
        placeToBuy: 'Element1 place to buy',
        reservedById: null,
      }),
      Immutable.Map({
        id: uuid().new(),
        name: 'Element2 name',
        description: 'Element2 description',
        placeToBuy: 'Element2 place to buy',
        reservedById: null,
      })
    ]),
    contributors: new Immutable.List([2, 3, 4]),
  }),
  Immutable.Map({
    id: uuid().new(),
    ownerId: 1,
    name: 'Example list for test application',
    description: 'Example list description',
    dueDate: moment('12.05.2020', 'DD.MM.YYYY'),
    isActive: true,
    items: new Immutable.List([
      Immutable.Map({
        id: uuid().new(),
        name: 'Element name',
        description: 'Element description',
        placeToBuy: 'Element place to buy',
        reservedById: null,
      })
    ]),
    contributors: new Immutable.List([2, 3, 4]),
  }),
  Immutable.Map({
    id: uuid().new(),
    ownerId: 2,
    name: 'Example list for test application',
    description: 'Example list description',
    dueDate: moment('12.05.2020', 'DD.MM.YYYY'),
    isActive: true,
    items: new Immutable.List([
      Immutable.Map({
        id: uuid().new(),
        name: 'Element1 name',
        description: 'Element1 description',
        placeToBuy: 'Element1 place to buy',
        reservedById: null,
      }),
      Immutable.Map({
        id: uuid().new(),
        name: 'Element2 name',
        description: 'Element2 description',
        placeToBuy: 'Element2 place to buy',
        reservedById: null,
      })
    ]),
    contributors: new Immutable.List([1, 3, 4]),
  }),
  Immutable.Map({
    id: uuid().new(),
    ownerId: 2,
    name: 'Example list for test application',
    description: 'Example list description',
    dueDate: moment('12.05.2020', 'DD.MM.YYYY'),
    isActive: true,
    items: new Immutable.List([
      Immutable.Map({
        id: uuid().new(),
        name: 'Element name',
        description: 'Element description',
        placeToBuy: 'Element place to buy',
        reservedById: null,
      })
    ]),
    contributors: new Immutable.List([1, 3, 4]),
  }),
  Immutable.Map({
    id: uuid().new(),
    ownerId: 3,
    name: 'Example list for test application',
    description: 'Example list description',
    dueDate: moment('12.05.2020', 'DD.MM.YYYY'),
    isActive: true,
    items: new Immutable.List([
      Immutable.Map({
        id: uuid().new(),
        name: 'Element1 name',
        description: 'Element1 description',
        placeToBuy: 'Element1 place to buy',
        reservedById: null,
      }),
      Immutable.Map({
        id: uuid().new(),
        name: 'Element2 name',
        description: 'Element2 description',
        placeToBuy: 'Element2 place to buy',
        reservedById: null,
      })
    ]),
    contributors: new Immutable.List([1, 2, 4]),
  }),
  Immutable.Map({
    id: uuid().new(),
    ownerId: 3,
    name: 'Example list for test application',
    description: 'Example list description',
    dueDate: moment('12.05.2020', 'DD.MM.YYYY'),
    isActive: true,
    items: new Immutable.List([
      Immutable.Map({
        id: uuid().new(),
        name: 'Element name',
        description: 'Element description',
        placeToBuy: 'Element place to buy',
        reservedById: null,
      })
    ]),
    contributors: new Immutable.List([1, 2, 4]),
  }),
  Immutable.Map({
    id: uuid().new(),
    ownerId: 4,
    name: 'Example list for test application',
    description: 'Example list description',
    dueDate: moment('12.05.2020', 'DD.MM.YYYY'),
    isActive: true,
    items: new Immutable.List([
      Immutable.Map({
        id: uuid().new(),
        name: 'Element1 name',
        description: 'Element1 description',
        placeToBuy: 'Element1 place to buy',
        reservedById: null,
      }),
      Immutable.Map({
        id: uuid().new(),
        name: 'Element2 name',
        description: 'Element2 description',
        placeToBuy: 'Element2 place to buy',
        reservedById: null,
      })
    ]),
    contributors: new Immutable.List([1, 2, 3]),
  }),
  Immutable.Map({
    id: uuid().new(),
    ownerId: 4,
    name: 'Example list for test application',
    description: 'Example list description',
    dueDate: moment('12.05.2020', 'DD.MM.YYYY'),
    isActive: true,
    items: new Immutable.List([
      Immutable.Map({
        id: uuid().new(),
        name: 'Element name',
        description: 'Element description',
        placeToBuy: 'Element place to buy',
        reservedById: null,
      })
    ]),
    contributors: new Immutable.List([1, 2, 3]),
  }),
]);
